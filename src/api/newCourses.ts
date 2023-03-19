import { Courses } from '../types/Courses';
import { CourseLessons } from '../types/CourseLessons';
import { client } from '../utils/fetchClient';

export const getCourses = async () => {
  return client.get<Courses>('');
};

export const getLesson = async (lessonId: string) => {
  return client.get<CourseLessons>(lessonId);
};
