import React, { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { Bookmark } from '../Icons/Bookmark';
import './CheckBox.css';

function CheckBox({ addArticle, removeArticle }) {

  const [checked, setChecked] = useState(false);
  const {user} = useUser()
  const isLogged = !!user

  const handleChecked = () => {
    if(!checked) {
      addArticle()
      setChecked(true)
    } else {
      removeArticle()
      setChecked(false)
    }
  }

  return (
    <>
      <label
        className='card__checkbox'
      >
        <input
          className='card__checkbox-input'
          // onClick={isActive ? removeArticle : addArticle}
          type='checkbox'
          disabled={!isLogged}
          checked={checked}
          onChange={handleChecked}
        />
        <span className='card__checkbox-span'>
          <Bookmark
            isChecked={checked}
          />
        </span>
      </label>
      <p className='card__popup'>Войдите, чтобы сохранять статьи</p>
    </>
  )
}

export default CheckBox;
