import React from 'react';
import { NotFound } from '../Icons/not-found';
import './Preloader.css'

function Preloader({ isOpen, error }) {

  const loaderInfo = error ? 'Ничего не найдено' : '';
  const loaderText = error ?
    'К сожалению по вашему запросу ничего не найдено.' :
    'Идет поиск новостей...';

  return (
    <section className={`preloader ${isOpen ? 'preloader-open' : ''}`}>
      {error ? <NotFound /> : <div className='preloader__animation'></div>}
      <h3 className='preloader__info'>{loaderInfo}</h3>
      <p className='preloader__text'>{loaderText}</p>
    </section>
  )
}

export default Preloader;