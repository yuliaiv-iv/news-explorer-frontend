import React, { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { Bookmark } from '../Icons/Bookmark';
import './CheckBox.css';

function CheckBox({ article, addArticle, removeArticle }) {

  const [isChecked, setIsChecked] = useState(!!article._id);
  const {user} = useUser();
  const isLogged = !!user;

  // const isChecked = !!article._id
  // const handleSave = () => !article._id ? addArticle(article) : removeArticle(article);

  // console.log(article.url)

  const handleChecked = () => {
    if(!isChecked) {
      addArticle()
      setIsChecked(true)
    } else {
      removeArticle()
      setIsChecked(false)
    }
  }

  return (
    <>
      <label
        className='card__checkbox'
      >
        <input
          className='card__checkbox-input'
          type='checkbox'
          disabled={!isLogged}
          checked={isChecked}
          onChange={handleChecked}
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
