import React, { useState } from 'react';
import { Bookmark } from '../Icons/bookmark';
import './CheckBox.css';

function CheckBox() {

  const [isActive, setIsActive] = useState(false);
  console.log(isActive)

  const handleChecked = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <label className='checkbox' onChange={handleChecked} checked>
        <input className='checkbox__input'
          type='checkbox' />
        <span className='checkbox__span'>
          <Bookmark
            isChecked={isActive}
          />
        </span>
      </label>
      <p className='checkbox__popup'>Войдите, чтобы сохранять статьи</p>
    </>
  )
}

export default CheckBox;
