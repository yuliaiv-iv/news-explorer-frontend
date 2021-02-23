import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import MainPage from '../../pages/MainPage.js';
import SavedNewsPage from '../../pages/SavedNewsPage.js';
import Login from '../../components/Login/Login';
import PopupSuccess from '../../components/PopupSuccess/PopupSuccess';
import Register from '../../components/Register/Register';
import Footer from '../Footer/Footer.js';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/auth';
import { api } from '../../utils/MainApi';
import { useUser } from '../../hooks/useUser.js';
import { CONFLICT_ERROR, UNAUTH_ERROR } from '../../utils/configs';


function App() {

  const history = useHistory();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [authError, setAuthError] = useState('');
  const [formError, setFormError] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3);
  const [articles, setArticles] = useState([]);
  const { getUser, user } = useUser();
  const isLogged = !!user;

  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.setItem('articles', JSON.stringify(articles))
    }
  }, [articles])

  useEffect(() => {
    const storageArticles = JSON.parse(localStorage.getItem('articles'));
    if (storageArticles && isLogged) {
      setArticles(storageArticles);
    } else {
      setArticles([]);
    }
  }, [isLogged])

  useEffect(() => {
    const getArticles = async () => {
      try {
        const fetchedArticles = await api.getArticles();
        setSavedArticles(fetchedArticles)
      } catch (error) {
        console.log(error)
      }
    }
    getArticles();
  }, [isLogged])

  useEffect(() => {
    tokenCheck();
  }, [isLogged]);

  const handleRegisterSubmit = (email, password, name) => {
    auth.register(email, password, name)
      .then((data) => {
        if (data) {
          setIsSuccessOpen(true);
          setIsRegisterOpen(false);
        }
      })
      .catch(() => {
        setAuthError(CONFLICT_ERROR);
        setFormError(true);
      })
  }

  const handleLoginSubmit = (email, password) => {
    auth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('articles', JSON.stringify(articles));
        }
      })
      .catch(() => {
        setAuthError(UNAUTH_ERROR);
        setFormError(true);
      })
      .finally(() => {
        getUser();
        setIsLoginOpen(false);
      })
  }

  const tokenCheck = () => {
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

  const onSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('articles');
    getUser();
    history.push('/');
  }

  const handleSaveArticle = (data) => {
    api.postArticles(data)
      .then((article) => {
        data._id = article._id
        setSavedArticles([data, ...savedArticles])
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnSaveArticle = (data) => {
    api.deleteArticle(data._id)
      .then((article) => {
        const newsArticles = savedArticles.filter((a) => a._id !== data._id);
        const searchedArticles = articles.map(i => {
          if (i._id === data._id) delete i._id;
          return i
        })
        setArticles(searchedArticles)
        setSavedArticles(newsArticles);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const handlePopupOpen = () => {
    setIsLoginOpen(true);
  }

  const handleTogglePopup = () => {
    if (isLoginOpen) {
      setIsLoginOpen(false)
      setIsRegisterOpen(true)
    } else {
      setIsLoginOpen(true)
      setIsRegisterOpen(false)
    }
  }

  const handleSuccessPopup = () => {
    setIsLoginOpen(true)
    setIsSuccessOpen(false)
  }

  const closeAllPopups = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
    setAuthError('')
  }

  return (
    <>
      <Switch>
        <Route
          exact path='/'
        >
          <MainPage
            onSignOut={onSignOut}
            addArticle={handleSaveArticle}
            articles={articles}
            setArticles={setArticles}
            removeArticle={handleUnSaveArticle}
            isLoginOpen={isLoginOpen}
            setIsLoginOpen={setIsLoginOpen}
            handlePopupOpen={handlePopupOpen}
            visibleCards={visibleCards}
            setVisibleCards={setVisibleCards}
          />
          <Login
            isOpen={isLoginOpen}
            onClose={closeAllPopups}
            onToggle={handleTogglePopup}
            onLogin={handleLoginSubmit}
            error={authError}
            isError={formError}
            setAuthError={setAuthError}
          />
          <Register
            isOpen={isRegisterOpen}
            onClose={closeAllPopups}
            onToggle={handleTogglePopup}
            onRegister={handleRegisterSubmit}
            error={authError}
            isError={formError}
            setAuthError={setAuthError}
          />
          <PopupSuccess
            onClose={closeAllPopups}
            isOpen={isSuccessOpen}
            onToggle={handleSuccessPopup}
          />
        </Route>
        <ProtectedRoute
          exact path='/saved-news'
          onLogin={setIsLoginOpen}
        >
          <SavedNewsPage
            onSignOut={onSignOut}
            savedArticles={savedArticles}
            removeArticle={handleUnSaveArticle}
          />
        </ProtectedRoute>
        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
      <Footer />
    </>

  );
}

export default App;
