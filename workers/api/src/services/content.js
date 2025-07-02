// services/content.js
import { COURSE_DATA } from '../config/courses.js';

export async function getVideoStream(env, courseId, fileName, range) {
  const videoKey = content//;
  
  if (range) {
    const matches = range.match(/bytes=(\d+)-(\d*)/);
    if (matches) {
      const start = parseInt(matches[1], 10);
      const end = matches[2] ? parseInt(matches[2], 10) : undefined;
      
      return await env.R2.get(videoKey, {
        range: { offset: start, length: end ? end - start + 1 : undefined }
      });
    }
  }
  
  return await env.R2.get(videoKey);
}

export async function getThumbnail(env, courseId, fileName) {
  const thumbnailKey = content//;
  return await env.R2.get(thumbnailKey);
}

export async function getLessonData(courseId, lessonId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  const lesson = course.lessons[lessonId];
  if (!lesson) return null;
  
  return {
    ...lesson,
    courseId,
    lessonId,
    courseTitle: course.title
  };
}

export async function getCourseStructure(courseId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  // Группируем уроки по неделям
  const weeks = {};
  Object.entries(course.lessons).forEach(([lessonId, lesson]) => {
    const weekMatch = lessonId.match(/week(\d+)/);
    const weekNum = weekMatch ? parseInt(weekMatch[1]) : 1;
    
    if (!weeks[weekNum]) {
      weeks[weekNum] = [];
    }
    
    weeks[weekNum].push({
      id: lessonId,
      ...lesson
    });
  });
  
  return {
    title: course.title,
    weeks,
    totalLessons: Object.keys(course.lessons).length
  };
}
