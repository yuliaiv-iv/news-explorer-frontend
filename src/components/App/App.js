import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import MainPage from '../../pages/MainPage.js';
import SavedNewsPage from '../../pages/SavedNewsPage.js';
import Footer from '../Footer/Footer.js';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { api } from '../../utils/MainApi';
import { useUser } from '../../hooks/useUser.js';


function App() {

  const history = useHistory();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [savedArticles, setSavedArticles] = useState({});
  const [articles, setArticles] = useState([]);
  const { getUser, user } = useUser();
  const isLogged = !!user;


  // const savedNews = Object.values(savedArticles)

  useEffect(() => {
    const getArticles = async () => {
      try {
        const fetchedArticles = await api.getArticles();
        // const savedArticlesMap = fetchedArticles.reduce((acc, art) => {
        //   const id = `${art.date}-${art.link}`
        //   acc[id] = art;
        //   return acc
        // }, {})
        setSavedArticles(fetchedArticles)
      } catch (error) {
        console.log(error)
      }
    }
    getArticles();
  }, [isLogged])


  const onSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('articles');
    getUser()
    history.push('/')
  }

  const handleSaveArticle = (data) => {
    api.postArticles(data)
      .then((article) => {
        data._id = article._id
        setSavedArticles([data, ...savedArticles])
        console.log(savedArticles)
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleUnSaveArticle = (data) => {
    api.deleteArticle(data._id)
      .then((article) => {
        const newCards = savedArticles.filter((a) => a._id !== data._id);
        data._id = article._id
        // console.log(data._id)
        // console.log(article._id)
        setSavedArticles(newCards);
      })
      .catch(err => {
        console.log(err);
      })
  };

//   const deleteArticle = async article => {
//     try {
//         const data = await api.deleteArticle(article._id);
//         const newArticles = savedArticles.filter(a => a._id !== data._id);
//         setSavedArticles(newArticles);
//         setState(state => {
//           const newArticles = state.articles.map(item => {
//             if(item._id === data._id) delete item._id;
//             return item;
//           })

//           return ({
//             ...state,
//             article: newArticles,
//           })
//         })
//       } catch (err) {
//         console.log(err);
//       }
// }

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
