import React, { useState, useRef, useEffect } from 'react';
import './Card.css';
import { useRouteMatch } from 'react-router-dom';
import { Bookmark, Trash } from '../../images';
import { initialCards as cards } from '../../utils/data';


function Card({ isLogin, date, source, title, text, image, popup, link }) {

  const titleRef = useRef('');
  const [style, setStely] = useState({})

  useEffect(() => {
    const height = (titleRef.current && titleRef.current.offsetHeight) || 0;
    if (height <= 58) {
      setStely({ "--lines": "5" })
    } else if (height >= 59 && height <= 87) {
      setStely({ "--lines": "4" })
    }
  }, [titleRef]);

  const path = useRouteMatch();
  const [savedCard, setSavedCard] = useState(false);
  const bookmarkStyle = savedCard && isLogin ? 'card__icon_bookmark-fill' : 'card__icon_bookmark';
  // const popupStyle = isLogin ? 'card__popup_hide' : 'card__popup';


  const handleClick = () => {
    setSavedCard(!savedCard)
  }

  return (
    <li className="card">
      {path.path === '/' ?
        <Bookmark
          className='card__icon'
          popup={popup}
          onClick={handleClick}
          pathStyle={bookmarkStyle}
        /> :
        <Trash
          popup={popup}
          className='card__icon'
          pathStyle='card__icon_trash'
        />
      }
      <p className='card__popup'>{popup}</p>
      <img className='card__image' src={image} alt={title} />
      <a className='card__link' href={link} target='_blank' rel='noreferrer'>
        <div className='card__info'>
          <div className='card__date'>{date}</div>
          <div>
            <h2 className='card__title' ref={titleRef}>{title}</h2>
            <p className='card__text' style={style}>{text}</p>
          </div>

        </div>
        <h4 className='card__source'>{source}</h4>
      </a>
    </li>
  )
}

export default Card;
