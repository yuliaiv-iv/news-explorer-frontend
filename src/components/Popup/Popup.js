import React, { useEffect } from 'react';
import { Closebtn } from '../Icons/Closebtn';
import './Popup.css'

function Popup({ isSuccess, toggle, onToggle, title, onClose, isOpen, children }) {

  const handleEsc = (event) => {
    if (event.key !== 'Escape') {
      return
    }
    onClose();
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget && isOpen) {
      onClose();
    }
  }

  return (
    <section
      className={`popup ${isOpen ? 'popup_open' : ''}`}
      onMouseDown={handleOverlayClose}
    >
      <div className='popup__container'>
        <Closebtn
          type='button'
          className='popup__close'
          onClose={onClose}
        />
        <h3 className='popup__title'>{title}</h3>
        {children}
        <h4 className={isSuccess ? 'popup__span_success' : 'popup__span'}>
          {isSuccess ? '' : 'или'}
          <span className='popup__redirect' onClick={onToggle}>
            {toggle}
          </span>
        </h4>
      </div>
    </section>
  )
}

export default Popup;