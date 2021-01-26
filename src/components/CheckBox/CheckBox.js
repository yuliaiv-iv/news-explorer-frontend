import React, { useState } from 'react';
import { Bookmark } from '../Icons/Bookmark';
import './CheckBox.css';

function CheckBox() {

  const [isActive, setIsActive] = useState(false);

  const handleChecked = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <label className='card__checkbox' onChange={handleChecked} checked>
        <input className='card__checkbox-input'
          type='checkbox' />
        <span className='card__checkbox-span'>
          <Bookmark
            isChecked={isActive}
          />
        </span>
      </label>
      <p className='card__popup'>Войдите, чтобы сохранять статьи</p>
    </>
  )
}

export default CheckBox;
