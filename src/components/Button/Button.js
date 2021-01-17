import React from 'react';
import './Button.css';

function Button({ isDisabled, children, type, modifier, button, onClick, name }) {

  return (
    <>
      <button
        type={type}
        className={`button ${`${name}__button`} ${modifier}`}
        onClick={onClick}
        disabled={isDisabled}
      >
        {button}
        {children}
      </button>
    </>
  )
}

export default Button;