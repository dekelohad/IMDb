import React from 'react';
import './Button.css';

const button = ({ text, onClick, style, ...rest }) => {
  return (
    <button onClick={onClick} className="btn" {...rest}>
      {text}
    </button>
  );
};

export default button;
