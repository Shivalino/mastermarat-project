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
  BASE_UPLOAD_DIR: path.join(__dirname, '..', 'temp_upload', 'content'),
  SUPPORTED_FILE_TYPES: ['.json', '.mp4', '.jpg', '.jpeg', '.png'],
  MAX_PARALLEL_UPLOADS: 3
};

// Структура курсов - обновляется вручную при добавлении новых уроков
const COURSE_STRUCTURE = {
  course01: {
    name: 'Механика здоровья',
    lessons: [
      'lesson001' // Пока только один урок загружен
    ]
  },
  course02: {
    name: 'Курс 2',
    lessons: [] // Пока пусто
  },
  course03: {
    name: 'Курс 3',
    lessons: []
  },
  course04: {
    name: 'Курс 4',
    lessons: []
  },
  course05: {
    name: 'Курс 5',
    lessons: []
  },
  course06: {
    name: 'Курс 6',
    lessons: []
  },
  course07: {
    name: 'Курс 7',
    lessons: []
  },
  course08: {
    name: 'Курс 8',
    lessons: []
  }
};

// Парсинг аргументов командной строки
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    env: 'dev',
    course: null,
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
📤 Upload Content to R2 - MasterMarat Project

Usage: node scripts/upload_content_to_r2.js [options]

Options:
  --env <env>      Environment (dev|prod), default: dev
  --course <id>    Upload specific course only
  --dry-run        Show what would be uploaded without uploading
  --verbose        Show detailed output
  --help           Show this help

Examples:
  node scripts/upload_content_to_r2.js --env dev
  node scripts/upload_content_to_r2.js --course course1 --dry-run
  node scripts/upload_content_to_r2.js --env prod --verbose
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

// Найти все файлы для загрузки
function findFilesToUpload(courseId, lessonId) {
  const files = [];
  const courseDir = path.join(CONFIG.BASE_UPLOAD_DIR, courseId);

  // JSON файл урока (lesson001.json)
  const jsonFile = path.join(courseDir, `${lessonId}.json`);
  if (fileExists(jsonFile)) {
    files.push({
      local: jsonFile,
      r2: `content/${courseId}/${lessonId}.json`,
      type: 'metadata'
    });
  }

  // Видео файл (lesson001.mp4)
  const videoFile = path.join(courseDir, `${lessonId}.mp4`);
  if (fileExists(videoFile)) {
    files.push({
      local: videoFile,
      r2: `videos/${courseId}/${lessonId}.mp4`,
      type: 'video'
    });
  }

  // Thumbnail (lesson001.jpg)
  const thumbFile = path.join(courseDir, `${lessonId}.jpg`);
  if (fileExists(thumbFile)) {
    files.push({
      local: thumbFile,
      r2: `thumbnails/${courseId}/${lessonId}.jpg`,
      type: 'thumbnail'
    });
  }

  // Альтернативный thumbnail с _thumb
  const thumbAltFile = path.join(courseDir, `${lessonId}_thumb.jpg`);
  if (!fileExists(thumbFile) && fileExists(thumbAltFile)) {
    files.push({
      local: thumbAltFile,
      r2: `thumbnails/${courseId}/${lessonId}.jpg`,
      type: 'thumbnail'
    });
  }

  return files;
}

// Основная функция загрузки
async function uploadContentToR2() {
  const options = parseArgs();

  console.log('🚀 MasterMarat R2 Content Uploader');
  console.log('==================================');
  console.log(`Environment: ${options.env}`);
  console.log(`Bucket: ${CONFIG.R2_BUCKET_NAME}`);
  console.log(`Mode: ${options.dryRun ? 'DRY RUN' : 'LIVE'}`);
  console.log('');

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
    console.log('─'.repeat(50));

    for (const lessonId of courseData.lessons) {
      console.log(`\n📖 Lesson: ${lessonId}`);

      const files = findFilesToUpload(courseId, lessonId);

      if (files.length === 0) {
        console.log(`   ⚠️  No files found for this lesson`);
        continue;
      }

      for (const file of files) {
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
