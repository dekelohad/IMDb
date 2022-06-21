import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="container__title">Sorry... nothing here.</h1>
      <Button
        text="Go Back To Homepage"
        onClick={() => {
          navigate(`/`);
        }}
      />
    </div>
  );
};

export default NotFound;
