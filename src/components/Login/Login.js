import React from 'react';
import FormInput from '../FormInput/FormInput';
import Popup from '../Popup/Popup';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Login.css'

function Login({ onClose, isOpen, onToggle, isDisabled }) {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title='Вход'
      toggle='Зарегистрироваться'
      onToggle={onToggle}
    >
      <FormInput
        name='email'
        type='email'
        label='Email'
        placeholder='Введите почту'
      />
      <FormInput
        name='password'
        type='password'
        label='Пароль'
        placeholder='Введите пароль'
      />
      <SubmitButton
        type='submit'
        name='popup'
        button='Войти'
      // isDisabled={true}
      />
    </Popup>
  )
}

export default Login;
