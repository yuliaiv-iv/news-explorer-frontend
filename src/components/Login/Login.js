import React, { useEffect } from 'react';
import Popup from '../Popup/Popup';
import SubmitButton from '../SubmitButton/SubmitButton';
// import { CloseBtn } from '../../images';
import './Login.css'

function Login({ onClose, isOpen }) {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title='Вход'
    >
      <SubmitButton
        button='Войти'
      />
    </Popup>
  )
}

export default Login;