import React, { useEffect } from 'react';
import { CloseBtn } from '../../images';
import './Popup.css'

function Popup({ onClose, isOpen, name, classname, children }) {

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

  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className='popup__container'>
        <CloseBtn
          type="button"
          aria-label="закрыть модальное окно"
          className="button popup__close"
          onClick={onClose}
        >
        </CloseBtn>
        {children}
      </div>
    </section>
  )
}

export default Popup;