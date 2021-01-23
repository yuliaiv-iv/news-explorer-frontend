import React, { useState, useRef, useEffect } from 'react';
import './NewsCard.css';
import { useRouteMatch } from 'react-router-dom';
import { Trash } from '../Icons/Trash';
import CheckBox from '../CheckBox/CheckBox';
import Button from '../Button/Button';
import ExternalLink from '../ExternalLink/ExternalLink';


function Card({ date, source, title, text, image, keyword, link }) {

  const titleRef = useRef('');
  const [style, setStyle] = useState({});
  const path = useRouteMatch();

  useEffect(() => {
    const height = (titleRef.current && titleRef.current.offsetHeight) || 0;
    if (height <= 58) {
      setStyle({ "--lines": "5" })
    } else if (height >= 59 && height <= 87) {
      setStyle({ "--lines": "4" })
    }
  }, [titleRef]);

  return (
    <li className='card'>
      {path.path === '/' ?
        <CheckBox /> :
        <>
          <p className='card__keyword'>{keyword}</p>
          <Button className='card'>
            <Trash />
          </Button>
          <p className='card__popup card__popup_trash'>
            Убрать из сохранённых
          </p>
        </>
      }
      <img className='card__image' src={image} alt={title} />
      <ExternalLink section='card' href={link}>
        <div className='card__info'>
            <div className='card__date'>{date}</div>
            <h2 className='card__title' ref={titleRef}>{title}</h2>
            <p className='card__text' style={style}>{text}</p>
          </div>
          <h4 className='card__source'>{source}</h4>
      </ExternalLink>
    </li>
  )
}

export default Card;
