import React from 'react';
import './FormInput.css'

function FormInput({
  maxLength,
  minLength,
  error,
  isSearchForm,
  children,
  name,
  label,
  type,
  placeholder,
  onChange,
  isValid,
  value
}) {

  return (
    <>
      <label
        className={isSearchForm ? 'search__lable' : 'popup__label'}
        htmlFor={name}
      >
        {label}
        <input
          type={type}
          className={isSearchForm ? 'search__input' : 'popup__input'}
          value={value || ''}
          name={name}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={onChange}
          required
        />
        {children}
        <span
          className={isValid ? '' : 'popup__input-error'}
        >
          {error}
        </span>
      </label>
    </>
  )
}

export default FormInput;