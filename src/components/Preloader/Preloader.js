import React, {useState} from 'react';
import './Preloader.css'

function Preloader({isOpen, error}) {


  return (
    <section className={`preloader ${isOpen ? 'preloader-open' : ''}`}>
      <div className='preloader__animation'></div>
      <h3 className='preloader__info'>{error ? 'Ничего не найдено' : ''}</h3>
      <h4 className='preloader__text'>{error ? 'К сожалению по вашему запросу ничего не найдено.' : 'Идет поиск новостей...'}</h4>
    </section>
  )
}

export default Preloader;