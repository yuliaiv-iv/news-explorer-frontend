import React, { useContext } from 'react';
import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNews({ savedArticles }) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <section className='savednews'>
        <div className='savednews__info'>
          <h3 className='savednews__title'>Сохранённые статьи</h3>
          <h4 className='savednews__subtitle'>{`${currentUser.name}, у вас 5 сохранённых статей`}</h4>
          <p className='savednews__description'>По ключевым словам: <span className='savednews__description_span'>Природа, Тайга </span>и <span className='info__description_span'>2-м другим</span></p>
        </div>
        <div className='savednews__container'>
          {/* <ul className='savednews__list'>
            {cards.map(card => <NewsCard {...card}
            />)}
          </ul> */}
        </div>
      </section>
    </>
  )
}

export default SavedNews;