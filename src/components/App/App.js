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
  // const [savedArticles, setSavedArticles] = useState([]);

  function onSignOut() {
    localStorage.removeItem('token');
    setIsLogged(false)
    history.push('/')
  }

  useEffect(() => {
    Promise.all([api.getUserData(), api.getArticles()])
      .then(([info, articles]) => {
        setCurrentUser(info);
        // setSavedArticles(articles)
        // console.log(articles)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLogged])


  // function handleSaveArticle(article) {
  //   console.log(article)
  //   api.postArticles(article)
  //     .then(result => {
  //       console.log(result)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  const handleSaveArticle = (data) => {
    api.postArticles(data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };



  // const dateNow = new Date(); //now
  // // const date = dateNow.setDate(2);

  // const newDate = dateNow.setDate(7); 

  // const d = new Date();
  // d.setDate(15);  

  // console.log(d)

  // console.log(typeof dateNow)
  // console.log(typeof newDate)


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
            onClick={handleSaveArticle}
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
