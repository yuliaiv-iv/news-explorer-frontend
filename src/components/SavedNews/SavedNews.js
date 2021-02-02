import React, { useContext } from 'react';
import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';
import { useUser } from '../../hooks/useUser';
import { useArticles } from '../../hooks/useArticles';

function SavedNews({ savedArticles, removeArticle }) {

  const { user } = useUser();
  // const [...articles]  = useArticles()

  const wordEnding = [
    'сохраненная статья',
    'сохраненные статьи',
    'сохраненных статей',
  ]

  const countArticles = savedArticles.length;

  function handleEnding(count, words) {  
    return words[(count % 100 > 4 && count % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(count % 10 < 5) ? count % 10 : 5]];
}

  return (
    <>
      <section className='savednews'>
        <div className='savednews__info'>
          <h3 className='savednews__title'>Сохранённые статьи</h3>
          <h4 className='savednews__subtitle'>
            {`${user.name}, у вас ${countArticles} ${handleEnding(countArticles, wordEnding)}`}
            </h4>
          <p className='savednews__description'>По ключевым словам: <span className='savednews__description_span'>Природа, Тайга </span>и <span className='info__description_span'>2-м другим</span></p>
        </div>
        <div className='savednews__container'>
          <ul className='savednews__list'>
          {savedArticles.map((article) =>
            <NewsCard {...article}
              article={article}
              removeArticle={removeArticle}
              key={article._id}
            />)}
          </ul>
        </div>
      </section>
    </>
  )
}

export default SavedNews;