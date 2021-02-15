import React, { useEffect, useState} from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';

function NewsCardList ({ articles, isShown, addArticle, removeArticle }) {

  const [visibleArticles, setVisibleArticles] = useState([]);

  useEffect(() => {        
    setVisibleArticles(articles.slice(0, 3));
}, [articles]);

  const showMoreCards = () => {
    setVisibleArticles(articles.slice(0, visibleArticles.length + 3));
  }

  const isEntire = visibleArticles.length >= articles.length

  return (
    <section className={`card-news ${isShown ? 'card-news_open' : ''}`}>
      <div className='card-news__container'>
        <h3 className='card-news__title'>Результаты поиска</h3>
        <ul className='card-news__list'>
          {visibleArticles.map((article, index) =>
            <NewsCard {...article}
              article={article}
              key={index}
              addArticle={addArticle}
              removeArticle={removeArticle}
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
