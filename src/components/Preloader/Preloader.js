import React from 'react';
import { NotFound } from '../Icons/NotFound';
import './Preloader.css'

function Preloader({ notFound, isOpen }) {

  const loaderError = notFound ? 'Ничего не найдено' : '';
  const loaderInfo = notFound ?
    'К сожалению по вашему запросу ничего не найдено.' :
    'Идет поиск новостей...';

  return (
    <section className={`preloader ${isOpen ? 'preloader-open' : ''}`}>
      {notFound ? <NotFound /> : <div className='preloader__animation'></div>}
      <h3 className='preloader__error'>{loaderError}</h3>
      <p className='preloader__info'>{loaderInfo}</p>
    </section>
  )
}

export default Preloader;