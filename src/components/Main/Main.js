import React from 'react';
import './Main.css';
import About from '../About/About';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

function Main({ onClick }) {
  return (
    <main className=''>
      <Header />
      <SearchForm />
      <About />
    </main>
  )
}

export default Main;