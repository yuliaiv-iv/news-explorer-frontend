import React, { useState, useEffect } from 'react';
import './NewsCardList.css';
import { initialCards as cards } from '../../utils/data';
import Card from '../Card/Card';
import SubmitButton from '../SubmitButton/SubmitButton';


function NewsCardList({ date, source, title, text }) {

  const [visibleCards, setVisibleCards] = useState(3);

  const showMoreCards = () => {
    setVisibleCards((prevValue) => prevValue + 3);
  }

  return (

    <section className='card-news'>
      <h3 className='card-news__title'>Результаты поиска</h3>
      <ul className='card-news__list'>
        {cards.slice(0, visibleCards).map(card => <Card {...card}

        />)}
      </ul>
      <SubmitButton
        button='Показать еще'
        onClick={showMoreCards}
      />
    </section>
  )
}

export default NewsCardList;