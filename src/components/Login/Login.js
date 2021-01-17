import React from 'react';
import FormInput from '../FormInput/FormInput';
import Form from '../Form/Form';
import './Login.css'
import Popup from '../Popup/Popup';

function Login({ onClose, isOpen, onToggle }) {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title='Вход'
      toggle='Зарегистрироваться'
      onToggle={onToggle}
    >
      <Form
        button='Войти'
        isDisabled={true} // реализация неактивной кнопки
      >
        <FormInput
          name='email'
          type='email'
          label='Email'
          placeholder='Введите почту'
        >
          <span
            className='popup__input-error'
          >
            Неправильный формат email
        </span>
        </FormInput>
        <FormInput
          name='password'
          type='password'
          label='Пароль'
          placeholder='Введите пароль'
        />
      </Form>
    </Popup>
  )
}

export default Login;

// button='Войти'
// isDisabled={true} // реализация неактивной кнопки
