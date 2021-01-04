import React from 'react';
import './SubmitButton.css';

function SubmitButton({ classname, isDisabled, button }) {

  return (
    <button
      type='submit'
      className={`popup__button-submit ${isDisabled ? 'popup__button-submit_disabled' : ''}`}
      disabled={isDisabled}
    >
      {button}
    </button>
  )
}

export default SubmitButton;