import React from 'react';
import './SearchForm.css'

function SearchForm({onSubmit}) {
  return (
    <section className='search'>
      <div className='search__panel'>
        <h1 className='search__title'>Что творится в мире?</h1>
        <h3 className='search__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h3>
        <form className='search__form' onSubmit={onSubmit}>
          <input
            className='search__input'
            placeholder="Введите тему новости"
            type="text"
          >
          </input>
          <button type='submit' className='search__button'>Искать</button>
        </form>
      </div>
    </section>
  )
}

export default SearchForm;