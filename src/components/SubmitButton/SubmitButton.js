import React from 'react';

function SubmitButton({ classname, isDisabled, button }) {

  return (
    <button
      type='submit'
      className={`${classname}__button-submit ${isDisabled ? 'popup__button-submit_disabled' : ''}`}
      disabled={isDisabled}
    >
      {button}
    </button>
  )
}

export default SubmitButton;