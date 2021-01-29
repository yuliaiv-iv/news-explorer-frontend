import React from 'react';
import Form from '../Form/Form';
import FormInput from '../FormInput/FormInput';
import './SearchForm.css'

function SearchForm({ onSubmit, onChange }) {
  return (
    <section className='search'>
      <div className='search__panel'>
        <h1 className='search__title'>Что творится в мире?</h1>
        <h3 className='search__subtitle'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h3>
        <Form
          button='Искать'
          className='search'
          onSubmit={onSubmit}
        >
          <FormInput
            placeholder='Введите тему новости'
            type='text'
            isSearchForm={true}
            onChange={onChange}
            // value={inputValue}
          />
        </Form>
      </div>
    </section>
  )
}

export default SearchForm;

