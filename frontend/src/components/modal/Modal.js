import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useGlobalContext } from '../../AppContext';
import './Modal.css';

const Modal = ({ children }) => {
  const { closeModal, isModalOpen } = useGlobalContext();

  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  return ReactDOM.createPortal(
    <>
      <div
        onClick={closeModal}
        className={`modal ${isModalOpen ? 'modal--open' : ''}`}
      >
        <div className="modal__content">
          <AiFillCloseCircle className="modal-close" onClick={closeModal} />
          {children}
        </div>
      </div>
    </>,
    document.getElementById('root')
  );
};

export default Modal;
