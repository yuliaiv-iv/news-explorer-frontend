import React from 'react';
import './SearchForm.css'

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__panel'>
        <h1 className='search__title'>Что творится в мире?</h1>
        <h3 className='search__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h3>
        <div className='search__form'>
          <input
            className='search__input'
            placeholder="Введите тему новости"
            type="text"
          >
          </input>
          <button className='search__button'>Искать</button>
        </div>
      </div>
    </section>
  )
}

export default SearchForm;