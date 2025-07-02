// templates/base.js
export function createHtmlPage(title, content, scripts = '') {
  return <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> - MasterMarat</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
            color: #333;
        }
        .header {
            background: #3D968C;
            color: white;
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        .video-container {
            background: #000;
            border-radius: 8px;
            overflow: hidden;
            margin: 20px 0;
        }
        video {
            width: 100%;
            height: auto;
            display: block;
        }
    </style>
</head>
<body>
    
    
</body>
</html>;
}

export function createVideoPlayer(videoUrl, posterUrl) {
  return 
    <div class="video-container">
        <video 
            controls 
            preload="metadata"
            poster=""
            id="lesson-video"
        >
            <source src="" type="video/mp4">
            Ваш браузер не поддерживает видео.
        </video>
    </div>
  ;
}
