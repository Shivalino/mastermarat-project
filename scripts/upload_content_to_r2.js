/**
 * upload_content_to_r2.js
 * Скрипт для загрузки контента курсов в Cloudflare R2
 *
 * Использование:
 * node scripts/upload_content_to_r2.js [--env dev|prod] [--course course1] [--dry-run]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Конфигурация
const CONFIG = {
  R2_BUCKET_NAME: 'mastermarat-videos',
  BASE_UPLOAD_DIR: path.join(__dirname, '..', 'temp_upload'),
  SUPPORTED_FILE_TYPES: ['.json', '.mp4', '.jpg', '.jpeg', '.png', '.md'],
  SUPPORTED_LANGUAGES: ['ru', 'ua', 'en'],
  MAX_PARALLEL_UPLOADS: 3
};

// Структура курсов - новая многоязычная структура
const COURSE_STRUCTURE = {
  demo: {
    name: 'Демо уроки',
    languages: ['ru', 'ua', 'en']
  },
  course1: {
    name: 'Курс 1: Механика здоровья',
    languages: ['ru', 'ua', 'en']
  },
  course2: {
    name: 'Курс 2',
    languages: ['ru', 'ua', 'en']
  },
  course3: {
    name: 'Курс 3',
    languages: ['ru', 'ua', 'en']
  },
  course4: {
    name: 'Курс 4',
    languages: ['ru', 'ua', 'en']
  },
  course5: {
    name: 'Курс 5',
    languages: ['ru', 'ua', 'en']
  },
  course6: {
    name: 'Курс 6',
    languages: ['ru', 'ua', 'en']
  },
  course7: {
    name: 'Курс 7',
    languages: ['ru', 'ua', 'en']
  },
  course8: {
    name: 'Курс 8',
    languages: ['ru', 'ua', 'en']
  }
};

// Парсинг аргументов командной строки
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    env: 'dev',
    course: null,
    language: 'ru',
    dryRun: false,
    verbose: false
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--env':
        options.env = args[++i] || 'dev';
        break;
      case '--course':
        options.course = args[++i];
        break;
      case '--language':
      case '--lang':
        options.language = args[++i] || 'ru';
        break;
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--verbose':
        options.verbose = true;
        break;
      case '--help':
        showHelp();
        process.exit(0);
    }
  }

  return options;
}

// Показать справку
function showHelp() {
  console.log(`
📤 Upload Content to R2 - MasterMarat Project (Multilingual)

Usage: node scripts/upload_content_to_r2.js [options]

Options:
  --env <env>        Environment (dev|prod), default: dev
  --course <id>      Upload specific course (demo|course1|course2|...)
  --language <lang>  Language to upload (ru|ua|en), default: ru
  --dry-run          Show what would be uploaded without uploading
  --verbose          Show detailed output
  --help             Show this help

Examples:
  node scripts/upload_content_to_r2.js --env dev --course demo --language ru
  node scripts/upload_content_to_r2.js --course course1 --dry-run
  node scripts/upload_content_to_r2.js --env prod --verbose --language ru
  
Available courses: ${Object.keys(COURSE_STRUCTURE).join(', ')}
Available languages: ${CONFIG.SUPPORTED_LANGUAGES.join(', ')}
  `);
}

// Проверка существования файла
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

// Получить размер файла
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return (stats.size / 1024 / 1024).toFixed(2) + ' MB';
  } catch (error) {
    return 'Unknown';
  }
}

// Загрузить один файл в R2
async function uploadFileToR2(localPath, r2Path, options) {
  const { env, dryRun, verbose } = options;

  if (!fileExists(localPath)) {
    console.error(`❌ File not found: ${localPath}`);
    return false;
  }

  const fileSize = getFileSize(localPath);
  console.log(`📦 Uploading: ${r2Path} (${fileSize})`);

  if (dryRun) {
    console.log(`   [DRY RUN] Would upload: ${localPath} → ${r2Path}`);
    return true;
  }

  try {
    const envFlag = env === 'prod' ? '' : `--env ${env}`;
    const command = `wrangler r2 object put "${CONFIG.R2_BUCKET_NAME}/${r2Path}" --file="${localPath.replace(/\\/g, '/')}" ${envFlag}`;

    if (verbose) {
      console.log(`   Command: ${command}`);
    }

    execSync(command, { stdio: verbose ? 'inherit' : 'pipe' });
    console.log(`   ✅ Success: ${r2Path}`);
    return true;
  } catch (error) {
    console.error(`   ❌ Failed: ${error.message}`);
    return false;
  }
}

// Найти все файлы для загрузки в новой многоязычной структуре
function findFilesToUpload(courseId, language) {
  const files = [];
  const contentDir = path.join(CONFIG.BASE_UPLOAD_DIR, 'content', language, courseId);
  const thumbnailDir = path.join(CONFIG.BASE_UPLOAD_DIR, 'thumbnails', language, courseId);

  if (!fileExists(contentDir)) {
    return files;
  }

  // Найти все .md файлы в папке курса
  const mdFiles = fs.readdirSync(contentDir)
    .filter(file => file.endsWith('.md') && file.match(/^video\d+\.md$/))
    .map(file => path.basename(file, '.md'));

  for (const videoId of mdFiles) {
    // Описание урока (.md файл)
    const mdFile = path.join(contentDir, `${videoId}.md`);
    if (fileExists(mdFile)) {
      files.push({
        local: mdFile,
        r2: `content/${language}/${courseId}/${videoId}.md`,
        type: 'description'
      });
    }

    // Видео файл (.mp4)
    const videoFile = path.join(contentDir, `${videoId}.mp4`);
    if (fileExists(videoFile)) {
      files.push({
        local: videoFile,
        r2: `content/${language}/${courseId}/${videoId}.mp4`,
        type: 'video'
      });
    }

    // Thumbnail (.jpg)
    const thumbFile = path.join(thumbnailDir, `${videoId}.jpg`);
    if (fileExists(thumbFile)) {
      files.push({
        local: thumbFile,
        r2: `thumbnails/${language}/${courseId}/${videoId}.jpg`,
        type: 'thumbnail'
      });
    }
  }

  return files;
}

// Основная функция загрузки
async function uploadContentToR2() {
  const options = parseArgs();

  console.log('🚀 MasterMarat R2 Content Uploader (Multilingual)');
  console.log('================================================');
  console.log(`Environment: ${options.env}`);
  console.log(`Language: ${options.language}`);
  console.log(`Bucket: ${CONFIG.R2_BUCKET_NAME}`);
  console.log(`Mode: ${options.dryRun ? 'DRY RUN' : 'LIVE'}`);
  console.log('');

  // Проверка языка
  if (!CONFIG.SUPPORTED_LANGUAGES.includes(options.language)) {
    console.error(`❌ Language "${options.language}" not supported!`);
    console.log(`Available languages: ${CONFIG.SUPPORTED_LANGUAGES.join(', ')}`);
    process.exit(1);
  }

  // Определяем какие курсы загружать
  const coursesToUpload = options.course
    ? { [options.course]: COURSE_STRUCTURE[options.course] }
    : COURSE_STRUCTURE;

  if (options.course && !COURSE_STRUCTURE[options.course]) {
    console.error(`❌ Course "${options.course}" not found!`);
    console.log(
      `Available courses: ${Object.keys(COURSE_STRUCTURE).join(', ')}`
    );
    process.exit(1);
  }

  let totalFiles = 0;
  let successCount = 0;
  const startTime = Date.now();

  // Загружаем по курсам
  for (const [courseId, courseData] of Object.entries(coursesToUpload)) {
    console.log(`\n📚 Course: ${courseId} - ${courseData.name}`);
    console.log(`🌐 Language: ${options.language}`);
    console.log('─'.repeat(50));

    const files = findFilesToUpload(courseId, options.language);

    if (files.length === 0) {
      console.log(`   ⚠️  No files found for this course in ${options.language}`);
      continue;
    }

    // Группируем файлы по видео урокам
    const videoGroups = {};
    files.forEach(file => {
      const videoId = path.basename(file.r2).split('.')[0];
      if (!videoGroups[videoId]) {
        videoGroups[videoId] = [];
      }
      videoGroups[videoId].push(file);
    });

    for (const [videoId, videoFiles] of Object.entries(videoGroups)) {
      console.log(`\n📖 Video: ${videoId}`);
      
      for (const file of videoFiles) {
        console.log(`   📄 ${file.type}: ${file.local}`);
        totalFiles++;
        const success = await uploadFileToR2(file.local, file.r2, options);
        if (success) successCount++;
      }
    }
  }

  // Итоговая статистика
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log('\n' + '='.repeat(50));
  console.log('📊 Upload Summary:');
  console.log(`   Language: ${options.language}`);
  console.log(`   Total files: ${totalFiles}`);
  console.log(`   Successful: ${successCount}`);
  console.log(`   Failed: ${totalFiles - successCount}`);
  console.log(`   Duration: ${duration}s`);
  console.log(
    `   Status: ${successCount === totalFiles ? '✅ All files uploaded!' : '⚠️  Some files failed'}`
  );

  // Проверка загруженных файлов
  if (!options.dryRun && successCount > 0) {
    console.log('\n🔍 Verifying uploads...');
    try {
      const envFlag = options.env === 'prod' ? '' : `--env ${options.env}`;
      const listCommand = `wrangler r2 object list ${CONFIG.R2_BUCKET_NAME} ${envFlag}`;

      if (options.verbose) {
        console.log(`Command: ${listCommand}`);
        execSync(listCommand, { stdio: 'inherit' });
      } else {
        const output = execSync(listCommand, { encoding: 'utf8' });
        const uploadedCount =
          output.split('\n').filter(line => line.trim()).length - 1;
        console.log(`   ✅ Found ${uploadedCount} objects in R2 bucket`);
      }
    } catch (error) {
      console.log(`   ⚠️  Could not verify uploads: ${error.message}`);
    }
  }

  process.exit(successCount === totalFiles ? 0 : 1);
}

// Обработка ошибок
process.on('unhandledRejection', error => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Запуск
if (require.main === module) {
  uploadContentToR2();
}

module.exports = { uploadContentToR2, COURSE_STRUCTURE };
