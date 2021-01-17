import React, { useState, useEffect } from 'react';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import Main from '../components/Main/Main';
import Register from '../components/Register/Register';
import SearchForm from '../components/SearchForm/SearchForm';
import Wrapper from '../components/Wrapper/Wrapper';

function MainPage({ isLogin }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const [open, setOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  function handlePopupOpen() {
    setIsLoginOpen(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true)
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

  return (
    <>
      <Wrapper section='header'>
        <Header
          onClick={handlePopupOpen}
          isLogin={isLogin}
          theme='light'
        />
        <SearchForm
          onSubmit={handleSubmit}
        />
      </Wrapper>
      <Main
        isOpen={open}
        isLogin={isLogin}
      />
      <About />
      <Login
        isOpen={isLoginOpen}
        onClose={closeAllPopups}
        onToggle={handleTogglePopup}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        onToggle={handleTogglePopup}
      />
    </>
  )
}

export default MainPage;