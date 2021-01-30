import React, { useState } from 'react';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import './SearchForm.css'
import * as news from '../../utils/NewsApi';

function SearchForm({ getArticles }) {

  const [keyword, setKeyword] = useState('');

  const handleInputSearch = event => {
    setKeyword(event.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
      getArticles(keyword);
  };

  return (
    <section className='search'>
      <div className='search__panel'>
        <h1 className='search__title'>Что творится в мире?</h1>
        <h3 className='search__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h3>
        <Form
          button='Искать'
          className='search'
          onSubmit={handleSearchSubmit}
        >
          <FormInput
            placeholder='Введите тему новости'
            type='text'
            isSearchForm={true}
            onChange={handleInputSearch}
            value={keyword}
          />
        </Form>
      </div>
    </section>
  )
}

export default SearchForm;

