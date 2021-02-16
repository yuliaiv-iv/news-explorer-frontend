import React from 'react';
import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';
import { useUser } from '../../hooks/useUser';

function SavedNews({ savedArticles, removeArticle }) {

  const { user } = useUser();
  const words = savedArticles.map(a => a.keyword);

  let hash = {}

  for (let word of words) {
    if (!hash[word]) hash[word] = 0
    hash[word]++
  }
  const hashToArray = Object.entries(hash);
  const sortedArray = hashToArray.sort((a, b) => b[1] - a[1])
  const sortedElements = sortedArray.map(word => word[0])

  const getKeywords = (arr) => {
    if (arr.length <= 3) {
      return arr.join(', ')
    } else {
      return sortedElements.slice(0, 2).join(', ')
    }
  }

  const countWords = () => {
    return sortedElements.slice(2).length;
  }

  const countArticles = savedArticles.length;
  const wordEnding = [
    'сохраненная статья',
    'сохраненные статьи',
    'сохраненных статей',
  ]

  const handleCountArticles = () => {
    if (savedArticles.length === 0) {
      return 'нет'
    } else {
      return savedArticles.length
    }
  }

  const handleEnding = (count, words) => {
    return words[(count % 100 > 4 && count % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(count % 10 < 5) ? count % 10 : 5]];
  }

  return (
    <>
      <section className='savednews'>
        <div className='savednews__info'>
          <h3 className='savednews__title'>Сохранённые статьи</h3>
          <h4 className='savednews__subtitle'>
            {`${user.name}, у вас ${handleCountArticles()} ${handleEnding(countArticles, wordEnding)}`}
          </h4>
          {sortedElements.length === 0 ? '' : 
          <p className='savednews__description'>По ключевым словам: <span className='savednews__description_span'>{getKeywords(sortedElements)} </span>
          {sortedElements.length <= 3 ? '' : `и ${countWords()}-м другим`}
          </p>}
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
