import React from 'react';
import './FormInput.css'

function FormInput({ isSearchForm, children, name, label, type, placeholder }) {

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
          id={name}
          name={name}
          placeholder={placeholder}
          required
        />
        {children}
        {/* <span
          className='popup__input-error'
        >
          Неправильный формат email
        </span> */}
      </label>
    </>
  )
}

export default FormInput;