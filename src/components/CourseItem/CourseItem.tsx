import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Course } from '../../types/Course';
import { actions as actualCourseActions } from '../../features/actualCourse';
import './CourseItem.scss';

type Props = {
  course: Course,
};

export const CourseItem: React.FC<Props> = ({ course }) => {
  const actualCourse = useAppSelector(state => state.actualCourse);
  const dispatch = useAppDispatch();

  return (
    <div className="courseItem">
      <img className="courseItem__image" src={`${course.previewImageLink}/cover.webp`} alt="product" />

      <h4 className="courseItem__name">{course.title}</h4>

      <div className="courseItem__info">
        <p>{`Lessons: ${course.lessonsCount}`}</p>
        <p>{`Rating: ${course.rating}/5`}</p>
      </div>

      {course.meta.skills
        ? (
          <>
            <p className="courseItem__skills">Skills:</p>

            <ul className="courseItem__skillsList">
              {course.meta.skills.map(skill => (
                <li className="courseItem__skillItem" key={skill}>{skill}</li>
              ))}
            </ul>
          </>
        )
        : ''}

      <Link
        className={classNames(
          'courseItem__button', {
            'courseItem__button--added': course.id === actualCourse,
          },
        )}
        to={`/courses/${course.meta.slug}`}
        onClick={() => dispatch(actualCourseActions.setActualCourse(course.id))}
      >
        {course.id === actualCourse
          ? 'Continue'
          : 'Start Course'}
      </Link>
    </div>
  );
};
