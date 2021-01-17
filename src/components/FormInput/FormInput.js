import React from 'react';
import './FormInput.css'

function FormInput({ children, name, label, type, placeholder }) {

  return (
    <>
      <label
        className='popup__label'
        htmlFor={name}
      >
        {label}
        <input
          type={type}
          className='popup__input'
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