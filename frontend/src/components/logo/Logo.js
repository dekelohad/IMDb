import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logo.css';

const Logo = ({ text, className, ...rest }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/')}
      {...rest}
      className={`logo ${className}`}
    >
      {text}
    </div>
  );
};

export default Logo;
