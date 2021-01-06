import React from 'react';
import './Card.css'

function Card({ date, source, title, text, image }) {

  return (
    <li className="card">
      <img className='card__image' src={image} alt={title} />
      <div className='card__info'>
        <div className='card__date'>{date}</div>
        <div>
        <h2 className='card__title'>{title}</h2>
        <p className='card__text'>{text}</p>
        </div>
        
      </div>
      <h4 className='card__source'>{source}</h4>
    </li>
  )
}

export default Card;