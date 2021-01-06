import React from 'react';
import './SubmitButton.css';

function SubmitButton({ classname, isDisabled, button, onClick }) {

  return (
    <button
      type='submit'
      className={`popup__button-submit ${isDisabled ? 'popup__button-submit_disabled' : ''}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {button}
    </button>
  )
}

export default SubmitButton;