import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import * as coursesActions from '../../features/courses';
import { CourseItem } from '../CourseItem/CourseItem';
import { Error } from '../Error';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination';
import './Courses.scss';

export const Courses: React.FC = () => {
  const [seachParams] = useSearchParams();
  const page = seachParams.get('page' || '');
  const { courses, loading, error } = useAppSelector(state => state.courses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(coursesActions.init());
  }, []);

  const perPage = 10;
  const pages = Array.from(Array(Math
    .ceil(courses.length
      / perPage) + 1)
    .keys()).slice(1);

  return (
    <div className="courses">
      {loading
        ? <Loader />
        : (
          <>
            {!loading && error
              ? <Error />
              : (
                <>
                  <h1 className="courses__title">Courses</h1>

                  <div className="courses__main">
                    <ul className="courses__list">
                      {courses.slice(
                        (!page
                          ? 0
                          : (+page - 1) * perPage),
                        (perPage * (!page ? 1 : +page)),
                      )
                        .map(course => (
                          <li key={course.id}>
                            <CourseItem course={course} />
                          </li>
                        ))}
                    </ul>
                  </div>

                  <Pagination pages={pages} />
                </>
              )}
          </>
        )}
    </div>
  );
};
