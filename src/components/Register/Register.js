import React from 'react';
import FormInput from '../FormInput/FormInput';
import './Register.css'
import Form from '../Form/Form';
import Popup from '../Popup/Popup';

function Register({onClick, onClose, isOpen, onToggle }) {

  const errorMessage = 'Такой пользователь уже есть';

  
  function handleSubmit(event) {
    event.preventDefault();
}

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title='Регистрация'
      toggle=' Войти'
      onToggle={onToggle}
    >
      <Form
        button='Зарегистрироваться'
        className='popup'
        isError={true}
        error={errorMessage}
        onSubmit={handleSubmit}
        onClick={onClick}
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
      </Form>
    </Popup>
  )
}

export default Register;