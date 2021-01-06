import React, { useState } from 'react';
import './Main.css';
import About from '../About/About';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({ onClick }) {

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false)


  console.log('load', open)
  // console.log('error', error)
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true)
  }

  setTimeout(() => {
    if(open) {
      setError(true)
    }
  }, 2000);

  return (
    <main className=''>
      <Header
        onClick={onClick}
      />
      <SearchForm onSubmit={handleSubmit} />
      <Preloader
        isOpen={open}
        error={error}
      />
      <NewsCardList />
      <About />
    </main>
  )
}

export default Main;