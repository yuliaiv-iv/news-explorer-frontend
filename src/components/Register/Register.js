import React from 'react';
import Popup from '../Popup/Popup';
import FormInput from '../FormInput/FormInput';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Register.css'

function Register({ onClose, isOpen, onToggle }) {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title='Регистрация'
      toggle='Войти'
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
      <FormInput
        name='name'
        type='text'
        label='Имя'
        placeholder='Введите своё имя'
        minLength="2" 
        maxLength="20"
      />
      <SubmitButton
        button='Зарегистрироваться'
      // isDisabled={true}
      />
    </Popup>
  )
}

export default Register;