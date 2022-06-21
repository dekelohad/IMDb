import React from 'react';
import './Footer.css';

const Footer = ({ content }) => {
  return (
    <footer className="footer">
      <span>{content}</span>
    </footer>
  );
};

export default Footer;
