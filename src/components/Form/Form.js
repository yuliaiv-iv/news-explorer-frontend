import React from 'react';
import Button from '../Button/Button';
import './Form.css'

function Form({ onClick, onSubmit, isDisabled, error, isError, button, children }) {

  return (
    <>
      <form
        className='popup__form'
        onSubmit={onSubmit}
        action="#"
        noValidate
        >
        {children}
        <div className='popup__button-container'>
          {isError ? <span className='popup__error'>{error}</span> : ''}
          <Button
            type='submit'
            name='popup'
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