export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS headers РґР»СЏ РІСЃРµС… РѕС‚РІРµС‚РѕРІ
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Range',
      'Access-Control-Expose-Headers': 'Content-Length, Content-Range'
    };

    // РћР±СЂР°Р±РѕС‚РєР° OPTIONS РґР»СЏ CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // HTML РїР»РµРµСЂ РІРёРґРµРѕ
    if (url.pathname === '/player/' || url.pathname === '/player') {
      return handlePlayerRequest(request, env, corsHeaders);
    }

    // РџСѓР±Р»РёС‡РЅС‹Рµ thumbnails (Р‘Р•Р— С‚РѕРєРµРЅР°) - РїСЂСЏРјРѕ РёР· R2
    if (url.pathname.startsWith('/thumbnails/')) {
      const thumbnailPath = url.pathname.replace('/thumbnails/', '');

      try {
        const object = await env.R2.get(`thumbnails/${thumbnailPath}`);

        if (!object) {
          return new Response(
            JSON.stringify({
              status: 'error',
              error: 'Thumbnail not found',
              path: thumbnailPath
            }),
            {
              status: 404,
              headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
              }
            }
          );
        }

        // Р’РѕР·РІСЂР°С‰Р°РµРј РёР·РѕР±СЂР°Р¶РµРЅРёРµ
        return new Response(object.body, {
          headers: {
            'Content-Type': object.httpMetadata?.contentType || 'image/jpeg',
            'Cache-Control': 'public, max-age=86400',
            'ETag': object.httpEtag,
            ...corsHeaders
          }
        });
      } catch (error) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'R2 error',
            message: error.message
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
    }

    // Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ СЃ РїРѕРґРґРµСЂР¶РєРѕР№ Range requests РґР»СЏ СЃС‚СЂРёРјРёРЅРіР°
    if (url.pathname.startsWith('/video/')) {
      const videoPath = url.pathname.replace('/video/', '');
      const token = url.searchParams.get('token');

      if (!token) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Token required',
            message: 'Р”РѕР±Р°РІСЊС‚Рµ ?token=РІР°С€_С‚РѕРєРµРЅ Рє URL',
            example: url.origin + url.pathname + '?token=abc123'
          }),
          {
            status: 401,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }

      // РџСЂРѕСЃС‚Р°СЏ РїСЂРѕРІРµСЂРєР° С‚РѕРєРµРЅР° (РїРѕР·Р¶Рµ СѓСЃР»РѕР¶РЅРёРј)
      if (token.length < 3) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Invalid token',
            message: 'РўРѕРєРµРЅ СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёР№'
          }),
          {
            status: 403,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }

      try {
        // РЎРЅР°С‡Р°Р»Р° РїРѕР»СѓС‡Р°РµРј РјРµС‚Р°РґР°РЅРЅС‹Рµ Рѕ С„Р°Р№Р»Рµ
        const object = await env.R2.head(`videos/${videoPath}`);
        
        if (!object) {
          return new Response(
            JSON.stringify({
              status: 'error',
              error: 'Video not found',
              path: videoPath
            }),
            {
              status: 404,
              headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
              }
            }
          );
        }

        const fileSize = object.size;
        const range = request.headers.get('range');

        // Р•СЃР»Рё Р±СЂР°СѓР·РµСЂ Р·Р°РїСЂР°С€РёРІР°РµС‚ РєРѕРЅРєСЂРµС‚РЅС‹Р№ РґРёР°РїР°Р·РѕРЅ (РґР»СЏ СЃС‚СЂРёРјРёРЅРіР°)
        if (range) {
          const parts = range.replace(/bytes=/, '').split('-');
          const start = parseInt(parts[0], 10);
          const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
          const chunkSize = end - start + 1;

          // РџРѕР»СѓС‡Р°РµРј С‚РѕР»СЊРєРѕ РЅСѓР¶РЅСѓСЋ С‡Р°СЃС‚СЊ РІРёРґРµРѕ
          const rangedObject = await env.R2.get(`videos/${videoPath}`, {
            range: {
              offset: start,
              length: chunkSize
            }
          });

          if (!rangedObject) {
            return new Response('Range Not Satisfiable', { 
              status: 416,
              headers: corsHeaders 
            });
          }

          // Р’РѕР·РІСЂР°С‰Р°РµРј С‡Р°СЃС‚РёС‡РЅС‹Р№ РєРѕРЅС‚РµРЅС‚
          return new Response(rangedObject.body, {
            status: 206,
            headers: {
              'Content-Type': 'video/mp4',
              'Content-Length': chunkSize.toString(),
              'Content-Range': `bytes ${start}-${end}/${fileSize}`,
              'Accept-Ranges': 'bytes',
              'Cache-Control': 'no-cache',
              ...corsHeaders
            }
          });
        }

        // Р•СЃР»Рё РЅРµС‚ range Р·Р°РїСЂРѕСЃР°, РѕС‚РґР°РµРј РІРµСЃСЊ С„Р°Р№Р»
        const fullObject = await env.R2.get(`videos/${videoPath}`);

        return new Response(fullObject.body, {
          headers: {
            'Content-Type': 'video/mp4',
            'Content-Length': fileSize.toString(),
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'no-cache',
            'ETag': object.httpEtag,
            ...corsHeaders
          }
        });
      } catch (error) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'R2 error',
            message: error.message
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
    }

    // Webhook РѕС‚ SendPulse РїСЂРё РїРѕРєСѓРїРєРµ
    if (url.pathname === '/webhook/purchase' && request.method === 'POST') {
      try {
        const webhook = await request.json();

        // Р—РґРµСЃСЊ Р±СѓРґРµС‚ Р»РѕРіРёРєР° СЃРѕР·РґР°РЅРёСЏ С‚РѕРєРµРЅР° РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
        const userToken = generateSimpleToken(
          webhook.email || 'test@example.com'
        );

        return new Response(
          JSON.stringify({
            status: 'success',
            message: 'Webhook РїРѕР»СѓС‡РµРЅ! РўРѕРєРµРЅ СЃРѕР·РґР°РЅ.',
            user_token: userToken,
            received_data: webhook,
            note: 'РўРѕРєРµРЅ Р±СѓРґРµС‚ РѕС‚РїСЂР°РІР»РµРЅ РІ РїРµСЂРІРѕРј email РєСѓСЂСЃР°'
          }),
          {
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Invalid JSON in webhook',
            message: error.message
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
    }

    // Р“Р»Р°РІРЅР°СЏ СЃС‚СЂР°РЅРёС†Р° API
    return new Response(
      JSON.stringify({
        status: 'success',
        message: 'MasterMarat API СЃ R2 РёРЅС‚РµРіСЂР°С†РёРµР№ Рё РїР»РµРµСЂРѕРј СЂР°Р±РѕС‚Р°РµС‚!',
        worker_url: 'https://api.mastermarat.com',
        r2_connected: env.R2 ? 'Yes' : 'No',
        endpoints: {
          'GET /': 'Р­С‚Р° СЃС‚СЂР°РЅРёС†Р°',
          'GET /player/?lesson=X&token=Y&email=Z': 'HTML РІРёРґРµРѕРїР»РµРµСЂ',
          'GET /thumbnails/{filename}': 'РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ РІРёРґРµРѕ РёР· R2',
          'GET /video/{filename}?token=xxx': 'Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ РёР· R2 СЃ РїРѕРґРґРµСЂР¶РєРѕР№ streaming',
          'POST /webhook/purchase': 'Webhook РѕС‚ SendPulse РїСЂРё РїРѕРєСѓРїРєРµ'
        },
        test_links: {
          thumbnail: 'https://api.mastermarat.com/thumbnails/test_thumb.jpg',
          video_no_token: 'https://api.mastermarat.com/video/test_video.mp4',
          video_with_token: 'https://api.mastermarat.com/video/test_video.mp4?token=test123',
          player_demo: 'https://api.mastermarat.com/player/?lesson=test_video&token=demo123&email=demo@mastermarat.com'
        },
        file_structure: {
          thumbnails: 'R2://mastermarat-videos/thumbnails/',
          videos: 'R2://mastermarat-videos/videos/'
        },
        features: {
          streaming: 'HTTP Range requests РїРѕРґРґРµСЂР¶РёРІР°СЋС‚СЃСЏ РґР»СЏ Р±С‹СЃС‚СЂРѕРіРѕ СЃС‚Р°СЂС‚Р° РІРёРґРµРѕ',
          fullscreen: 'РџРѕР»РЅР°СЏ РїРѕРґРґРµСЂР¶РєР° fullscreen РЅР° РјРѕР±РёР»СЊРЅС‹С… СѓСЃС‚СЂРѕР№СЃС‚РІР°С…'
        },
        timestamp: new Date().toISOString()
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
};

// РћР±СЂР°Р±РѕС‚РєР° HTML РїР»РµРµСЂР° СЃ СѓР»СѓС‡С€РµРЅРЅРѕР№ РїРѕРґРґРµСЂР¶РєРѕР№ fullscreen
async function handlePlayerRequest(request, env, corsHeaders) {
  const url = new URL(request.url);
  const lesson = url.searchParams.get('lesson') || 'test_video';
  const token = url.searchParams.get('token') || 'demo-token-123';
  const email = url.searchParams.get('email') || 'demo@mastermarat.com';

  // HTML РєРѕРґ РїР»РµРµСЂР° СЃ РїРѕР»РЅРѕР№ РїРѕРґРґРµСЂР¶РєРѕР№ fullscreen
  const playerHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>MasterMarat - РЈСЂРѕРє: ${lesson}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #000;
            color: #fff;
            overflow-x: hidden;
            -webkit-user-select: none;
            user-select: none;
        }
        
        .header {
            background: linear-gradient(135deg, #2E8B57 0%, #3D968C 100%);
            padding: 15px 20px;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header h1 {
            font-size: 18px;
            font-weight: 600;
            margin: 0;
            color: #fff;
        }
        
        .header .progress {
            margin-top: 8px;
            font-size: 14px;
            opacity: 0.9;
            color: #E6F3F0;
        }
        
        .video-container {
            position: relative;
            width: 100%;
            background: #000;
        }
        
        .video-wrapper {
            position: relative;
            width: 100%;
            height: 250px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: visible !important;
        }
        
        video {
            width: 100%;
            height: 100%;
            object-fit: contain;
            background: #000;
            -webkit-media-controls-start-playback-button: revert;
        }
        
        /* Р¤РѕСЂСЃРёСЂСѓРµРј РїРѕРєР°Р· РєРЅРѕРїРєРё fullscreen */
        video::-webkit-media-controls-fullscreen-button {
            display: inline-block !important;
            opacity: 1 !important;
            pointer-events: auto !important;
        }
        
        video::-webkit-media-controls-panel {
            display: flex !important;
        }
        
        video::-webkit-media-controls {
            visibility: visible !important;
            opacity: 1 !important;
        }

        /* Fullscreen СЂРµР¶РёРјС‹ РґР»СЏ СЂР°Р·РЅС‹С… Р±СЂР°СѓР·РµСЂРѕРІ */
        video:fullscreen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }

        video:-webkit-full-screen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }

        video:-moz-full-screen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }

        video:-ms-fullscreen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }
        
        /* РЎРєСЂС‹РІР°РµРј watermark РІ fullscreen */
        video:-webkit-full-screen ~ .watermark,
        video:fullscreen ~ .watermark {
            display: none;
        }
        
        .watermark {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: rgba(255,255,255,0.8);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 10px;
            z-index: 10;
            pointer-events: none;
        }
        
        .loading {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 20;
        }
        
        .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid #2E8B57;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .content {
            padding: 20px;
            background: #1a1a1a;
            min-height: calc(100vh - 300px);
        }
        
        .lesson-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #fff;
        }
        
        .lesson-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            font-size: 14px;
            color: #999;
            flex-wrap: wrap;
        }
        
        .lesson-description {
            background: #2a2a2a;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #2E8B57;
        }
        
        .lesson-description h3 {
            color: #2E8B57;
            font-size: 16px;
            margin-bottom: 10px;
        }
        
        .lesson-description ul {
            list-style: none;
            padding: 0;
        }
        
        .lesson-description li {
            padding: 5px 0;
            padding-left: 20px;
            position: relative;
            color: #ddd;
            font-size: 14px;
            line-height: 1.4;
        }
        
        .lesson-description li:before {
            content: "вЂў";
            color: #2E8B57;
            position: absolute;
            left: 0;
        }
        
        .homework {
            background: linear-gradient(135deg, #F59B3A 0%, #E8851C 100%);
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        
        .homework h3 {
            color: #fff;
            font-size: 16px;
            margin-bottom: 8px;
        }
        
        .homework p {
            color: #fff;
            font-size: 14px;
            margin: 0;
            line-height: 1.4;
        }
        
        .navigation {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        
        .nav-button {
            flex: 1;
            padding: 12px;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            text-align: center;
        }
        
        .nav-button.primary {
            background: #2E8B57;
            color: #fff;
        }
        
        .nav-button.primary:hover {
            background: #3D968C;
        }
        
        .nav-button.secondary {
            background: #333;
            color: #ccc;
        }
        
        .nav-button.secondary:hover {
            background: #444;
        }
        
        .footer {
            background: #111;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #333;
        }
        
        .footer p {
            color: #666;
            font-size: 12px;
            margin: 0;
        }
        
        /* Fallback РєРЅРѕРїРєР° fullscreen РґР»СЏ СѓСЃС‚СЂРѕР№СЃС‚РІ Р±РµР· native РїРѕРґРґРµСЂР¶РєРё */
        .fullscreen-button {
            position: absolute;
            bottom: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            z-index: 15;
            display: none;
        }
        
        @media (max-width: 375px) {
            .video-wrapper {
                height: 220px;
            }
            
            .content {
                padding: 15px;
            }
            
            .lesson-title {
                font-size: 18px;
            }
        }
        
        /* РџРѕРєР°Р·С‹РІР°РµРј fallback РєРЅРѕРїРєСѓ РЅР° СѓСЃС‚СЂРѕР№СЃС‚РІР°С… Р±РµР· native fullscreen */
        @media (hover: none) and (pointer: coarse) {
            .fullscreen-button {
                display: block;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>рџЋЇ РўРµС…РЅРёРєР° СЃРЅСЏС‚РёСЏ РЅР°РїСЂСЏР¶РµРЅРёСЏ РІ С€РµРµ</h1>
        <div class="progress">РЈСЂРѕРє ${lesson} вЂў РљСѓСЂСЃ 1: РћСЃРЅРѕРІС‹ РѕСЃС‚РµРѕРїР°С‚РёРё</div>
    </div>
    
    <div class="video-container">
        <div class="video-wrapper">
            <div class="watermark">${email}</div>
            
            <div class="loading" id="loading">
                <div class="spinner"></div>
                <div style="color: #ccc; font-size: 14px;">Р—Р°РіСЂСѓР·РєР° РІРёРґРµРѕ...</div>
            </div>
            
            <video 
                id="videoPlayer"
                controls
                playsinline
                webkit-playsinline="true"
                x-webkit-airplay="allow"
                x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                x5-video-orientation="landscape|portrait"
                preload="auto"
                style="display: none;"
            >
                <source src="https://api.mastermarat.com/video/${lesson}.mp4?token=${token}" type="video/mp4">
                Р’Р°С€ Р±СЂР°СѓР·РµСЂ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ РІРёРґРµРѕ HTML5.
            </video>
            
            <button class="fullscreen-button" id="fullscreenBtn">
                в›¶ РџРѕР»РЅС‹Р№ СЌРєСЂР°РЅ
            </button>
        </div>
    </div>
    
    <div class="content">
        <h2 class="lesson-title">РЈСЂРѕРє: ${lesson}</h2>
        <div class="lesson-meta">
            <span>вЏ±пёЏ 4 РјРёРЅ 30 СЃРµРє</span>
            <span>рџ‘ЃпёЏ РџСЂРѕСЃРјРѕС‚СЂРµРЅРѕ 127 СЂР°Р·</span>
            <span>в­ђ 4.8/5</span>
        </div>
        
        <div class="lesson-description">
            <h3>рџ”Ќ Р§С‚Рѕ РІС‹ РёР·СѓС‡РёС‚Рµ РІ СЌС‚РѕРј СѓСЂРѕРєРµ:</h3>
            <ul>
                <li>РљР°Рє РїСЂР°РІРёР»СЊРЅРѕ РѕРїСЂРµРґРµР»РёС‚СЊ С‚РѕС‡РєРё РјР°РєСЃРёРјР°Р»СЊРЅРѕРіРѕ РЅР°РїСЂСЏР¶РµРЅРёСЏ</li>
                <li>РўРµС…РЅРёРєСѓ РјСЏРіРєРѕРіРѕ РѕСЃС‚РµРѕРїР°С‚РёС‡РµСЃРєРѕРіРѕ РІРѕР·РґРµР№СЃС‚РІРёСЏ</li>
                <li>РџРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚СЊ РґРІРёР¶РµРЅРёР№ РґР»СЏ СЃРЅСЏС‚РёСЏ СЃРїР°Р·РјР°</li>
                <li>РџСЂРѕС„РёР»Р°РєС‚РёРєСѓ РїРѕРІС‚РѕСЂРЅРѕРіРѕ РІРѕР·РЅРёРєРЅРѕРІРµРЅРёСЏ РЅР°РїСЂСЏР¶РµРЅРёСЏ</li>
            </ul>
        </div>
        
        <div class="homework">
            <h3>рџ’Ў Р”РѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ</h3>
            <p>Р’С‹РїРѕР»РЅРёС‚Рµ РёР·СѓС‡РµРЅРЅСѓСЋ С‚РµС…РЅРёРєСѓ 2 СЂР°Р·Р° РІ РґРµРЅСЊ РІ С‚РµС‡РµРЅРёРµ РЅРµРґРµР»Рё. Р—Р°РїРёСЃС‹РІР°Р№С‚Рµ РІР°С€Рё РѕС‰СѓС‰РµРЅРёСЏ РІ РґРЅРµРІРЅРёРє Р·РґРѕСЂРѕРІСЊСЏ.</p>
        </div>
        
        <div class="navigation">
            <button class="nav-button secondary" onclick="alert('Р”РµРјРѕ: РїСЂРµРґС‹РґСѓС‰РёР№ СѓСЂРѕРє')">
                в†ђ РџСЂРµРґС‹РґСѓС‰РёР№ СѓСЂРѕРє
            </button>
            <button class="nav-button primary" onclick="alert('Р”РµРјРѕ: СЃР»РµРґСѓСЋС‰РёР№ СѓСЂРѕРє')">
                РЎР»РµРґСѓСЋС‰РёР№ СѓСЂРѕРє в†’
            </button>
        </div>
    </div>
    
    <div class="footer">
        <p>В© 2025 MasterMarat вЂў РћСЃС‚РµРѕРїР°С‚РёС‡РµСЃРєРёРµ С‚РµС…РЅРёРєРё вЂў РџРѕРґРїРёСЃРєР° Р°РєС‚РёРІРЅР° РґРѕ 15.09.2025</p>
    </div>

    <script>
        // РћС‚РєР»СЋС‡Р°РµРј РєРѕРЅС‚РµРєСЃС‚РЅРѕРµ РјРµРЅСЋ Рё РІС‹РґРµР»РµРЅРёРµ
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('selectstart', e => e.preventDefault());
        
        // Р‘Р»РѕРєРёСЂСѓРµРј РіРѕСЂСЏС‡РёРµ РєР»Р°РІРёС€Рё
        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 123 || 
                (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
                (e.ctrlKey && e.keyCode === 85) ||
                (e.ctrlKey && e.keyCode === 83)) {
                e.preventDefault();
                return false;
            }
        });
        
        // РРЅРёС†РёР°Р»РёР·Р°С†РёСЏ РїР»РµРµСЂР°
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.getElementById('videoPlayer');
            const loading = document.getElementById('loading');
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            
            // РџРѕР»РёС„РёР»Р» РґР»СЏ fullscreen API
            if (!video.requestFullscreen) {
                video.requestFullscreen = video.webkitRequestFullscreen || 
                                         video.mozRequestFullScreen || 
                                         video.msRequestFullscreen ||
                                         video.webkitEnterFullscreen ||
                                         function() {
                                             if (video.webkitSupportsFullscreen) {
                                                 video.webkitEnterFullscreen();
                                             }
                                         };
            }
            
            if (!document.exitFullscreen) {
                document.exitFullscreen = document.webkitExitFullscreen || 
                                        document.mozCancelFullScreen || 
                                        document.msExitFullscreen ||
                                        document.webkitCancelFullScreen;
            }
            
            // РџРѕРєР°Р·С‹РІР°РµРј РІРёРґРµРѕ РєРѕРіРґР° Р·Р°РіСЂСѓР·РёР»РёСЃСЊ РјРµС‚Р°РґР°РЅРЅС‹Рµ (Р±С‹СЃС‚СЂРµРµ С‡РµРј loadeddata)
            video.addEventListener('loadedmetadata', function() {
                loading.style.display = 'none';
                video.style.display = 'block';
                console.log('Video metadata loaded, ready to play');
                
                // Р¤РѕСЂСЃРёСЂСѓРµРј РїРѕРєР°Р· РєРѕРЅС‚СЂРѕР»РѕРІ РЅР° touch СѓСЃС‚СЂРѕР№СЃС‚РІР°С…
                if ('ontouchstart' in window) {
                    video.setAttribute('controls', 'controls');
                }
            });
            
            // РњРѕР¶РЅРѕ РЅР°С‡Р°С‚СЊ РІРѕСЃРїСЂРѕРёР·РІРµРґРµРЅРёРµ
            video.addEventListener('canplay', function() {
                console.log('Video can start playing');
            });
            
            // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє Р·Р°РіСЂСѓР·РєРё
            video.addEventListener('error', function(e) {
                loading.innerHTML = '<div style="color: #ff6b6b; font-size: 14px;">вљ пёЏ РћС€РёР±РєР° Р·Р°РіСЂСѓР·РєРё РІРёРґРµРѕ<br><small>' + 
                                   (e.target.error ? e.target.error.message : 'РќРµРёР·РІРµСЃС‚РЅР°СЏ РѕС€РёР±РєР°') + '</small></div>';
                console.error('Video loading error:', e);
            });
            
            // Fallback РєРЅРѕРїРєР° fullscreen
            fullscreenBtn.addEventListener('click', function() {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                } else if (video.webkitEnterFullscreen) {
                    video.webkitEnterFullscreen();
                } else if (video.mozRequestFullScreen) {
                    video.mozRequestFullScreen();
                } else if (video.msRequestFullscreen) {
                    video.msRequestFullscreen();
                } else {
                    alert('РџРѕР»РЅРѕСЌРєСЂР°РЅРЅС‹Р№ СЂРµР¶РёРј РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚СЃСЏ РЅР° РІР°С€РµРј СѓСЃС‚СЂРѕР№СЃС‚РІРµ');
                }
            });
            
            // iOS specific fullscreen events
            video.addEventListener('webkitbeginfullscreen', function() {
                console.log('iOS fullscreen started');
            });
            
            video.addEventListener('webkitendfullscreen', function() {
                console.log('iOS fullscreen ended');
            });
            
            // РџСЂРѕСЃС‚Р°СЏ Р°РЅР°Р»РёС‚РёРєР°
            video.addEventListener('play', function() {
                console.log('Video started:', '${lesson}');
            });
            
            video.addEventListener('ended', function() {
                console.log('Video completed:', '${lesson}');
            });
            
            // Р›РѕРіРёСЂРѕРІР°РЅРёРµ РїСЂРѕРіСЂРµСЃСЃР° Р±СѓС„РµСЂРёР·Р°С†РёРё
            video.addEventListener('progress', function() {
                if (video.buffered.length > 0) {
                    const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                    const duration = video.duration;
                    if (duration > 0) {
                        console.log('Buffered: ' + Math.round((bufferedEnd / duration) * 100) + '%');
                    }
                }
            });
        });
    </script>
</body>
</html>`;

  return new Response(playerHTML, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache',
      ...corsHeaders
    }
  });
}

// РџСЂРѕСЃС‚Р°СЏ С„СѓРЅРєС†РёСЏ РіРµРЅРµСЂР°С†РёРё С‚РѕРєРµРЅР°
function generateSimpleToken(email) {
  const timestamp = Date.now().toString();
  const emailHash = btoa(email)
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 8);
  return `${emailHash}_${timestamp.substring(-8)}`;
}