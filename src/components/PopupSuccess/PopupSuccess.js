import React from 'react';
import Popup from '../Popup/Popup';
import './PopupSuccess.css'

function PopupSuccess({isOpen, onClose}) {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title='Пользователь успешно зарегистрирован!'
      toggle='Войти'
    >
    </Popup>
  )
}

export default PopupSuccess;