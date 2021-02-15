import React from 'react';
import Button from '../Button/Button';
import './Form.css'

function Form({ className, onClick, onSubmit, isDisabled, error, isError, button, children }) {

  return (
    <>
      <form
        className={`${className}__form`}
        onSubmit={onSubmit}
        action="#"
        noValidate
        >
        {children}
        <div className={`${className}__button-container`}>
          {isError ? <span className={`${className}__error`}>{error}</span> : ''}
          <Button
            type='submit'
            className={className}
            button={button}
            onClick={onClick}
            isDisabled={isDisabled}
            modifier={isDisabled ? 'popup__button_disabled' : ''}
          />
        </div>
      </form>
    </>
  )
}

export default Form;