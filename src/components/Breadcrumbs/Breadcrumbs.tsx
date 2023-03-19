import React from 'react';
import { Link } from 'react-router-dom';
import { CourseLessons } from '../../types/CourseLessons';
import './Breadcrumbs.scss';

type Props = {
  activeCourse: CourseLessons | null,
};

export const Breadcrumbs: React.FC<Props> = ({ activeCourse }) => {
  return (
    activeCourse && (
      <div className="breadcrumbs" data-cy="breadCrumbs">
        <Link to="/" className="breadcrumbs__link">
          <img src="./img/home.svg" alt="home" className="icon" />
        </Link>

        <img
          src="./img/arrowRightDisabled.svg"
          alt="arrowLeft"
        />

        <p className="breadcrumbs__activeProduct">
          {activeCourse.title}
        </p>
      </div>
    )
  );
};
