import React from 'react';
import Popup from '../Popup/Popup';
import './PopupSuccess.css'

function PopupSuccess({isOpen, onClose, onToggle}) {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      isSuccess={true}
      title='Пользователь успешно зарегистрирован!'
      onToggle={onToggle}
      toggle='Войти'
    >
    </Popup>
  )
}

export default PopupSuccess;