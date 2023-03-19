import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLesson } from '../../api/newCourses';
import { CourseLessons } from '../../types/CourseLessons';
import { BackButton } from '../BackButton';
import { Error } from '../Error';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { ActiveCourse } from '../ActiveCourse/ActiveCourse';
import { Loader } from '../Loader';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useAppSelector } from '../../app/hooks';

export const CoursePage: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<CourseLessons | null>(null);
  const [error, setError] = useState<string>('');
  const location = useLocation();
  const { courses } = useAppSelector(state => state.courses);
  const activeCourseItem = courses.find(item => item.meta.slug === location.pathname.slice(9));

  useEffect(() => {
    const loadData = async () => {
      try {
        if (activeCourseItem) {
          const loadLessons = await getLesson(activeCourseItem.id);

          setActiveCourse(loadLessons);
        }
      } catch {
        setError('We can not load data.');
      }
    };

    loadData();
  }, [activeCourseItem]);

  return (
    <>
      <Header />

      <div className="container">
        <>
          {!activeCourse && !error
            ? <Loader />
            : (
              <>
                <Breadcrumbs activeCourse={activeCourse} />

                <BackButton />

                {error && <Error />}

                {activeCourse && <ActiveCourse activeCourse={activeCourse} />}
              </>
            )}
        </>
      </div>

      <Footer />
    </>
  );
};
