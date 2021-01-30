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
import { api } from '../utils/MainApi';

function MainPage({ isLogged, setIsLogged, onSignOut, addArticle }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true)
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [articles, setArticles] = useState([]);

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
          return console.log('некорректно заполнено одно из полей');
        }
      })
  }

  function handleLoginSubmit(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          setIsLogged(true);
          localStorage.setItem('token', data.token)
          setIsLoginOpen(false);
        }
      })
      .catch((err) => {
        if (err === 400) {
          return console.log('не передано одно из полей');
        }
        if (err === 401) {
          return console.log('пользователь с email не найден');
        }
      })
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      auth.checkToken(token)
        .then((data) => {
          setIsLogged(true);
        })
        .catch((err) => {
          if (err === 401) {
            return console.log('Токен не передан или передан не в том формате');
          }
        })
    }
  }

  useEffect(() => {
    tokenCheck();
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
    setIsLoading(true)
    news.searchArticles(keyword)
      .then((data) => {
        const newArticle = data.map((article) => ({ keyword, ...article }))
        setArticles(newArticle)
        localStorage.setItem('arr', JSON.stringify(newArticle))
      })
      .catch((err) => {
        console.log(`${err}`)
      })
      .finally(() => {
        setIsLoading(false)
        setIsHidden(false)
      })
  };

  console.log(articles)
  return (
    <>
      <Wrapper section='header'>
        <Header
          onClick={handlePopupOpen}
          onSignOut={onSignOut}
          isLogged={isLogged}
          theme='light'
        />
        <SearchForm
          getArticles={getArticles}
        />
      </Wrapper>
      <Main
        isOpen={isLoading}
        articles={articles}
        isLogged={isLogged}
        isHidden={isHidden}
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