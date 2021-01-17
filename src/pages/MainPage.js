import React, { useState, useEffect } from 'react';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import Main from '../components/Main/Main';
import PopupSuccess from '../components/PopupSuccess/PopupSuccess';
import Register from '../components/Register/Register';
import SearchForm from '../components/SearchForm/SearchForm';
import Wrapper from '../components/Wrapper/Wrapper';

function MainPage({ isLogin }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  //Временная реализация открытия и переключения попапов
  const [loaderOpen, setLoaderOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  function handlePopupOpen() {
    setIsLoginOpen(true);
  }

  function handleSuccessOpen() {
    setIsSuccessOpen(true);
    setIsRegisterOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoaderOpen(true)
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
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
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
        isOpen={loaderOpen}
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
        onClick={handleSuccessOpen}
      />
      <PopupSuccess
        onClose={closeAllPopups}
        isOpen={isSuccessOpen}
      />
    </>
  )
}

export default MainPage;