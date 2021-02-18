import React, { useEffect } from 'react';
import FormInput from '../FormInput/FormInput';
import './Register.css'
import Form from '../Form/Form';
import Popup from '../Popup/Popup';
import useForm from '../../hooks/useForm'

function Register({ onClose, isOpen, onToggle, onRegister, error, isError, setAuthError }) {

  const {
    handleInputChange,
    handleSubmit,
    values,
    validationError,
    isFormValid,
    setValidationError,
    setValues,
    setIsValid,
    isValid
  } = useForm(submitForm);

  useEffect(() => {
    setValidationError({ email: '', password: '', name: '' });
    setValues({ email: '', password: '', name: '' })
    setIsValid({ email: false, password: false, name: false })
    setAuthError('')
  }, [setValidationError, setValues, setIsValid, setAuthError, isOpen])

  function submitForm(e) {
    const { email, password, name } = values;
    onRegister(email, password, name);
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
        error={error}
        isError={isError}
        onSubmit={handleSubmit}
        isDisabled={!isFormValid}
      >
        <FormInput
          name='email'
          type='email'
          label='Email'
          placeholder='Введите почту'
          value={values.email}
          onChange={handleInputChange}
          isValid={isValid.email}
          error={validationError.email}
        />
        <FormInput
          name='password'
          type='password'
          label='Пароль'
          minLength='8'
          placeholder='Введите пароль'
          value={values.password}
          onChange={handleInputChange}
          error={validationError.password}
          isValid={isValid.password}
        />
        <FormInput
          name='name'
          type='text'
          label='Имя'
          placeholder='Введите своё имя'
          minLength='2'
          maxLength='20'
          value={values.name}
          onChange={handleInputChange}
          error={validationError.name}
          isValid={isValid.name}
        />
      </Form>
    </Popup>
  )
}

export default Register;