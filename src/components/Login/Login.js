import React, { useEffect } from 'react';
import FormInput from '../FormInput/FormInput';
import Form from '../Form/Form';
import './Login.css'
import Popup from '../Popup/Popup';
import useForm from '../../hooks/useForm'

function Login({ onClick, onClose, isOpen, onToggle, onLogin, error, isError, setAuthError }) {

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
    setValidationError({ email: '', password: '' });
    setValues({ email: '', password: '' });
    setIsValid({ email: false, password: false });
    setAuthError('')
  }, [setValidationError, setValues, setIsValid, setAuthError, isOpen])

  function submitForm(e) {
    const { email, password, name } = values;
    onLogin(email, password, name);
  }

  return (
    <Popup
      isOpen={isOpen}
      onClick={onClick}
      onClose={onClose}
      title='Вход'
      toggle=' Зарегистрироваться'
      onToggle={onToggle}
    >
      <Form
        button='Войти'
        className='popup'
        onSubmit={handleSubmit}
        isDisabled={!isFormValid}
        error={error}
        isError={isError}
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
        >
        </FormInput>
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
      </Form>
    </Popup>
  )
}

export default Login;

