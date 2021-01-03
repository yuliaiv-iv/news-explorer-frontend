import React, { useEffect } from 'react';
import { CloseBtn } from '../../images';
import './Popup.css'

function Popup({ onClose, isOpen, children, title }) {

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
      onMouseUp={handleOverlayClose}
    >
      <div className='popup__container'>
        <CloseBtn
          type='button'
          aria-label='закрыть модальное окно'
          className='button popup__close'
          onClick={onClose}
        />
        <h3 className='popup__title'>{title}</h3>
        {children}
      </div>
    </section>
  )
}

export default Popup;