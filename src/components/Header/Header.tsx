import React from 'react';
import { Link } from 'react-router-dom';
import { PageNavLink } from '../PageNavLink/PageNavLink';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/courses" className="navbar__logo">
        <img src="./img/logo.svg" alt="logo" className="logo" />
      </Link>

      <div className="navbar__list">
        <PageNavLink to="/courses" text="COURSES" />
        <PageNavLink to="/english" text="ENGLISH" />
        <PageNavLink to="/hometask" text="HOMETASK" />
      </div>
    </nav>
  );
};
