import React from 'react';
import { Footer, Header } from './components';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer content="IMDb App | 2022" />
    </>
  );
};

export default Layout;
