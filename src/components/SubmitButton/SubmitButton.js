import React from 'react';
import './SubmitButton.css';

function SubmitButton({ children, type, modifier, isDisabled, button, onClick, name }) {

  return (
    <button
      type={type}
      className={`button ${`${name}__button`} ${modifier}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {button}
      {children}
    </button>
  )
}

export default SubmitButton;