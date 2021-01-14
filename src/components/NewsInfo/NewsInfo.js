import React from 'react';
import './NewsInfo.css';

function NewsInfo() {

  return (
    <section className='info'>
      <h3 className='info__title'>Сохранённые статьи</h3>
      <h4 className='info__subtitle'>Грета, у вас 5 сохранённых статей</h4>
      <p className='info__description'>По ключевым словам: <span className='info__description_span'>Природа, Тайга </span>и <span className='info__description_span'>2-м другим</span></p>
    </section>
  )
}

export default NewsInfo;