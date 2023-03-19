import { Lesson } from './Lesson';

export interface CourseLessons {
  id: string,
  title: string,
  tags: string[],
  launchDate: Date,
  status: string,
  description: string,
  duration: number,
  previewImageLink: string,
  rating: number,
  meta: {
    slug: string,
    skills: string[],
    courseVideoPreview: {
      link: string,
      duration: number,
      previewImageLink: string,
    }
  },
  lessons: Lesson[],
  containsLockedLessons: boolean,
}
