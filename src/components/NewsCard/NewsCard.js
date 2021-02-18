import React from 'react';
import './NewsCard.css';
import { useRouteMatch } from 'react-router-dom';
import { Trash } from '../Icons/Trash';
import CheckBox from '../CheckBox/CheckBox';
import Button from '../Button/Button';
import ExternalLink from '../ExternalLink/ExternalLink';
import { convertDate } from '../../utils/configs'

function Card({ article, addArticle, removeArticle, handlePopupOpen }) {

  const {
    text,
    keyword,
    link,
    date,
    urlToImage,
    image,
    title,
    publishedAt,
    url,
    description,
    source
  } = article;

  const newsDate = publishedAt || date;
  const path = useRouteMatch();

  const handleRemove = () => {
    removeArticle(article)
  }

  return (
    <li className='card'>
      {path.path === '/' ?
        <CheckBox
          addArticle={addArticle}
          removeArticle={removeArticle}
          article={article}
          handlePopupOpen={handlePopupOpen}
        /> :
        <>
          <p className='card__keyword'>{keyword}</p>
          <Button className='card' onClick={handleRemove}>
            <Trash />
          </Button>
          <p className='card__popup card__popup_trash'>
            Убрать из сохранённых
          </p>
        </>
      }
      <img className='card__image' src={urlToImage || image} alt={title} />
      <ExternalLink section='card' href={url || link}>
        <div className='card__info'>
          <div className='card__date'>{convertDate(newsDate)}</div>
          <h2 className='card__title'>{title}</h2>
          <p className='card__text'>{description || text}</p>
        </div>
        <h4 className='card__source'>{source.name || source}</h4>
      </ExternalLink>
    </li>
  )
}

export default Card;
