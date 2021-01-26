import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage.js';
import SavedNewsPage from '../../pages/SavedNewsPage.js';
import Footer from '../Footer/Footer.js';
import './App.css';


function App() {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
        <Switch>
          <Route exact path='/'>
            <MainPage
              isLogin={isLogin}
            />
          </Route>
          <Route path='/saved-news'>
            <SavedNewsPage
              isLogin={isLogin}
            />
          </Route>
        </Switch>
        <Footer />
    </>
  );
}

export default App;
