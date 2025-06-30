const { execSync } = require('child_process');
const path = require('path');

const R2_BUCKET_NAME = 'mastermarat-videos';
const BASE_UPLOAD_DIR = path.join(__dirname, '..', 'temp_upload', 'content');

const COURSE_DATA = {
  "course1": {
    lessons: {
      "week1_lesson1": {},
      "week1_lesson2": {},
      "week2_lesson1": {},
      "week2_lesson2": {},
      "week3_lesson1": {},
      "week3_lesson2": {},
      "week4_lesson1": {},
      "week4_lesson2": {}
    }
  }
};

async function uploadContentToR2() {
  console.log('Starting R2 content upload...');

  for (const courseId in COURSE_DATA) {
    for (const lessonId in COURSE_DATA[courseId].lessons) {
      const localFilePath = path.join(BASE_UPLOAD_DIR, courseId, `${lessonId}.json`);
      const r2ObjectKey = `content/${courseId}/${lessonId}.json`;

      try {
        console.log(`Uploading ${localFilePath} to ${R2_BUCKET_NAME}/${r2ObjectKey}...`);
        execSync(`wrangler r2 put ${R2_BUCKET_NAME}/${r2ObjectKey} --file=${localFilePath}`);
        console.log(`Successfully uploaded ${r2ObjectKey}`);
      } catch (error) {
        console.error(`Failed to upload ${r2ObjectKey}:`, error.message);
      }
    }
  }
  console.log('R2 content upload finished.');
}

uploadContentToR2();
