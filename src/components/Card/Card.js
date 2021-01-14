import React, { useRef } from 'react';
import './Card.css';
import { Bookmark } from '../../images';
//import { TrashBin} from '../../images';

function Card({ date, source, title, text, image }) {

  // const [login, setLogin] = useState(false)

const titleRef = useRef('');
console.log(titleRef)
var style = titleRef.current.offsetHeight < 87 ? { "--lines": 5 } : { "--lines": 4 }

  return (
    <li className="card">
      <Bookmark
        btnStyle='card__bookmark'
        pathStyle='card__path'
      />
      <p className='card__popup'>Войдите, чтобы сохранять статьи</p>
      <img className='card__image' src={image} alt={title} />
      <div className='card__info'>
        <div className='card__date'>{date}</div>
        <div>
          <h2 className='card__title' ref={titleRef}>{title}</h2>
          <p className='card__text' style={style}>{text}</p>
        </div>

      </div>
      <h4 className='card__source'>{source}</h4>
    </li>
  )
}

export default Card;
