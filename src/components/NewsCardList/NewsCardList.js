import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';

function NewsCardList({
  articles = [],
  isShown,
  addArticle,
  removeArticle,
  handlePopupOpen,
  setVisibleCards,
  visibleCards
}) {

  const showMoreCards = () => {
    setVisibleCards((prevValue) => prevValue + 3);
  }

  const isEntire = visibleCards >= articles.length;

  return (
    <section className={`card-news ${isShown ? 'card-news_open' : ''}`}>
      <div className='card-news__container'>
        <h3 className='card-news__title'>Результаты поиска</h3>
        <ul className='card-news__list'>
          {articles.slice(0, visibleCards).map((article, index) =>
            <NewsCard
              article={article}
              key={index}
              addArticle={addArticle}
              removeArticle={removeArticle}
              handlePopupOpen={handlePopupOpen}
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
