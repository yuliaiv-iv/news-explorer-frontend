import React from 'react';
import { useUser } from '../../hooks/useUser';
import { Bookmark } from '../Icons/Bookmark';
import './CheckBox.css';

function CheckBox({ article, addArticle, removeArticle, handlePopupOpen }) {

  const { user } = useUser();
  const isLogged = !!user;
  const isChecked = !!article._id;

  const handleChecked = () => {
    if (!article._id) {
      addArticle(article)
    } else {
      removeArticle(article)
    }
  }

  const handleCheckboxSave = () => {
    if (!isLogged) {
      handlePopupOpen()
    }
  }

  return (
    <>
      <label
        className='card__checkbox'
        onClick={handleCheckboxSave}
      >
        <input
          className='card__checkbox-input'
          type='checkbox'
          disabled={!isLogged}
          checked={isChecked}
          onChange={handleChecked}
          value={isChecked}
        />
        <span className='card__checkbox-span'>
          <Bookmark
            isChecked={isChecked}
          />
        </span>
      </label>
      <p className='card__popup'>Войдите, чтобы сохранять статьи</p>
    </>
  )
}

export default CheckBox;
