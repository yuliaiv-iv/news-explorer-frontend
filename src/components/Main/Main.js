import React, { useState, useEffect } from 'react';
import './Main.css';
import About from '../About/About';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Wrapper from '../Wrapper/Wrapper';


function Main({ isLogin }) {

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
}, []);

  function handlePopupOpen() {
    setIsLoginOpen(true);
  }

  function handleTogglePopup() {
    if (isLoginOpen) {
      setIsLoginOpen(false)
      setIsRegisterOpen(true)
    } else {
      setIsLoginOpen(true)
      setIsRegisterOpen(false)
    }
  }

  function closeAllPopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true)
  }

  setTimeout(() => {
    if (open) {
      setError(true)
    }
  }, 2000);

  return (
    <>
      <Wrapper>
        <Header
          onClick={handlePopupOpen}
          isLogin={isLogin}
          theme='white'
        />
        <SearchForm
          onSubmit={handleSubmit}
        />
      </Wrapper>
      <main className='main'>
        <Preloader
          isOpen={open}
          error={error}
        />
        <NewsCardList />
        <About />
      </main>
      <Login
        isOpen={isLoginOpen}
        onClose={closeAllPopups}
        onToggle={handleTogglePopup}
      >
      </Login>
      <Register
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        onToggle={handleTogglePopup}
      >
      </Register>
    </>
  )
}

export default Main;