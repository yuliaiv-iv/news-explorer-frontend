import React, { useEffect, useState } from 'react';
import { CloseBtn } from '../../images';
import './Popup.css'

function Popup({ onClose, isOpen, children, title, toggle, onToggle }) {

  function handleEsc(event) {
    if (event.key !== 'Escape') {
      return
    }
    onClose();
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  function handleOverlayClose(event) {
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
        <CloseBtn
          type='button'
          aria-label='закрыть модальное окно'
          className='popup__close'
          onClick={onClose}
        />
        <h3 className='popup__title'>{title}</h3>
        <form className="popup__form">
          {children}
        </form>
        <h4 className='popup__toggle'>или <span className='popup__span' onClick={onToggle}>{toggle}</span></h4>
      </div>
    </section>
  )
}

export default Popup;