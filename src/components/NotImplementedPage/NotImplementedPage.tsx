import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './NotImplementedPage.scss';

export const NotImplementedPage: React.FC = () => {
  return (
    <>
      <Header />

      <div className="container">
        <div className="notImplementedPage">
          <h2 className="notImplementedPage__title">Ooops!</h2>

          <p
            className="notImplementedPage__message"
          >
            We are sorry, but this feature is not implemented yet!
          </p>

          <Link
            className="notImplementedPage__button"
            to="/"
          >
            Back to courses page
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};
