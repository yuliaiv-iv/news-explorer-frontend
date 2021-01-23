import React, { useState} from 'react';
import './NewsCardList.css';
import { initialCards as cards } from '../../utils/data';
import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';

function NewsCardList ({ isLogin }) {

  const [visibleCards, setVisibleCards] = useState(3);

  const showMoreCards = () => {
    setVisibleCards((prevValue) => prevValue + 3);
  }
console.log(window.innerWidth)

  const isEntire = visibleCards >= cards.length;

  return (

    <section className='card-news'>
      <div className='card-news__container'>
        <h3 className='card-news__title'>Результаты поиска</h3>
        <ul className='card-news__list'>
          {cards.slice(0, visibleCards).map(card =>
            <NewsCard {...card}
              isLogin={isLogin}
            />)}
        </ul>
        <Button
          modifier={isEntire ? 'card-news__button_hide' : ''}
          className='card-news'
          button='Показать еще'
          onClick={showMoreCards}
        />
      </div>
    </section>
  )
}

export default NewsCardList;