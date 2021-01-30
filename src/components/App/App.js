import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import MainPage from '../../pages/MainPage.js';
import SavedNewsPage from '../../pages/SavedNewsPage.js';
import Footer from '../Footer/Footer.js';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { api } from '../../utils/MainApi';

function App() {

  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);


  function onSignOut() {
    localStorage.removeItem('token');
    setIsLogged(false)
    history.push('/')
  }

  useEffect(() => {
    Promise.all([api.getUserData(), api.getArticles()])
      .then(([info, articles]) => {
        setCurrentUser(info);
        setSavedArticles(articles)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLogged])


  // const handleSaveArticle = (data) => {
  //   api.postArticles(data)
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };


// console.log(savedArticles)

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route
          exact path='/'
        >
          <MainPage
            isLogged={isLogged}
            setIsLogged={setIsLogged}
            onSignOut={onSignOut}
            // addArticle={handleSaveArticle}
          />
        </Route>
        <ProtectedRoute
          exact path='/saved-news'
          isLogged={isLogged}
        >
          <SavedNewsPage
            isLogged={isLogged}
            onSignOut={onSignOut}
          />
        </ProtectedRoute>
        {/* <Route path='/' >
          <Redirect to='/'/>
        </Route> */}
      </Switch>
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
