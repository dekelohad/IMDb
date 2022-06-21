import React from 'react';
import { useLocation } from 'react-router-dom';
import { Logo, SearchBar } from '../../../../components';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const userLocationIsVaild = location.pathname === '/';
  return (
    <div className="header">
      <div className="header_container">
        {userLocationIsVaild && <SearchBar />}
        <Logo
          className={`${
            userLocationIsVaild ? 'header__logo' : 'header__logo--full--Width'
          }`}
          text="IMDB APP"
        />
      </div>
    </div>
  );
};

export default Header;
