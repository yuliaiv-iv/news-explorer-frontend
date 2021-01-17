import React, { useState} from 'react';
import './NewsCardList.css';
import { initialCards as cards } from '../../utils/data';
import Card from '../Card/Card';
import Button from '../Button/Button';

function NewsCardList ({ isLogin }) {

  const [visibleCards, setVisibleCards] = useState(3);

  const showMoreCards = () => {
    setVisibleCards((prevValue) => prevValue + 3);
  }

  const isEntire = visibleCards >= cards.length;

  return (

    <section className='card-news'>
      <div className='card-news__container'>
        <h3 className='card-news__title'>Результаты поиска</h3>
        <ul className='card-news__list'>
          {cards.slice(0, visibleCards).map(card =>
            <Card {...card}
              popup='Войдите, чтобы сохранять статьи'
              isLogin={isLogin}
            />)}
        </ul>
        <Button
          modifier={isEntire ? 'card-news__button_hide' : ''}
          name='card-news'
          button='Показать еще'
          onClick={showMoreCards}
        />
      </div>
    </section>
  )
}

export default NewsCardList;