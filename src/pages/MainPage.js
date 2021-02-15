import React, { useState, useEffect } from 'react';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import Main from '../components/Main/Main';
import PopupSuccess from '../components/PopupSuccess/PopupSuccess';
import Register from '../components/Register/Register';
import SearchForm from '../components/SearchForm/SearchForm';
import Wrapper from '../components/Wrapper/Wrapper';
import * as auth from '../utils/auth';
import * as news from '../utils/NewsApi';
import { BADREQ_ERROR, CONFLICT_ERROR, UNAUTH_ERROR } from '../utils/configs'
import { useUser } from '../hooks/useUser';

function MainPage({ removeArticle, onSignOut, addArticle, articles, setArticles }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { user, getUser } = useUser()
  const isLogged = !!user;

  const [isOpen, setIsOpen] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [isShown, setIsShown] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('articles')) {
      const storageArticles = JSON.parse(localStorage.getItem('articles'));
      setArticles(storageArticles);
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  }, [setArticles])

  function handleRegisterSubmit(email, password, name) {
    auth.register(email, password, name)
      .then((data) => {
        if (data) {
          setIsSuccessOpen(true);
          setIsRegisterOpen(false);
          console.log(data);
        }
      })
      .catch((err) => {
        if (err === 400) {
          return console.log(BADREQ_ERROR);
        }
        if (err === 409) {
          return console.log(CONFLICT_ERROR)
        }
      })
  }

  function handleLoginSubmit(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          setIsLoginOpen(false);
        }
      })
      .catch((err) => {
        if (err === 400) {
          return console.log(BADREQ_ERROR);
        }
        if (err === 401) {
          return console.log(UNAUTH_ERROR);
        }
      })
      .finally(() => {
        getUser()
      })
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      auth.checkToken(token)
        .then(() => {
        })
        .catch((err) => {
          if (err === 401) {
            return console.log('Токен не передан');
          }
        })
    }
  }

  useEffect(() => {
    tokenCheck();
  }, [isLogged]);

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

  function handleSuccessPopup() {
    setIsLoginOpen(true)
    setIsSuccessOpen(false)
  }

  function closeAllPopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
  }

  const getArticles = (keyword) => {
    if (keyword === '') {
      setIsEmpty(true)
    } else {
      setIsOpen(true)
      setNotFound(false)
      setIsEmpty(false)
      news.searchArticles(keyword)
        .then((data) => {
          const newArticle = data.map((article) => ({
            keyword,
            ...article
          }))
          if (newArticle.length === 0) {
            setNotFound(true)
            setIsShown(false)
          } else {
            setArticles(newArticle)
            setIsShown(true)
            setIsOpen(false)
            localStorage.setItem('articles', JSON.stringify(newArticle))
          }
        })
        .catch((err) => {
          setNotFound(true)
          setIsShown(false)
          console.log(`${err}`)
        })
    }
  };


  return (
    <>
      <Wrapper section='header'>
        <Header
          onClick={handlePopupOpen}
          onSignOut={onSignOut}
          theme='light'
        />
        <SearchForm
          getArticles={getArticles}
          isEmpty={isEmpty}
        />
      </Wrapper>
      <Main
        isOpen={isOpen}
        articles={articles}
        isShown={isShown}
        notFound={notFound}
        addArticle={addArticle}
        removeArticle={removeArticle}
      />
      <About />
      <Login
        isOpen={isLoginOpen}
        onClose={closeAllPopups}
        onToggle={handleTogglePopup}
        onLoggin={handleLoginSubmit}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        onToggle={handleTogglePopup}
        onRegister={handleRegisterSubmit}
      />
      <PopupSuccess
        onClose={closeAllPopups}
        isOpen={isSuccessOpen}
        onToggle={handleSuccessPopup}
      />
    </>
  )
}

export default MainPage;