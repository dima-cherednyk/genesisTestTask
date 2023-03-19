import React from 'react';
import { Courses } from '../Courses/Courses';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const CoursesPage: React.FC = () => {
  return (
    <>
      <Header />

      <div className="container">
        <Courses />
      </div>

      <Footer />
    </>
  );
};
