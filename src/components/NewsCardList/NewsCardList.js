import React, { useState} from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';

function NewsCardList ({ isLogin, articles, isHidden, onClick }) {

  const [visibleArticles, setVisibleArticles] = useState(3);

  const showMoreCards = () => {
    setVisibleArticles((prevValue) => prevValue + 3);
  }

  const isEntire = visibleArticles >= articles.length;

  return (
    <section className={`card-news ${isHidden ? '' : 'card-news_open'}`}>
      <div className='card-news__container'>
        <h3 className='card-news__title'>Результаты поиска</h3>
        <ul className='card-news__list'>
          {articles.slice(0, visibleArticles).map((article, index) =>
            <NewsCard {...article}
              article={article}
              key={index}
              isLogin={isLogin}
              onClick={onClick}
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
