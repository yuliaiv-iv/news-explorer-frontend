import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';


function App() {

  // const [isLoginOpen, setIsLoginOpen] = useState(false);
  // const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true)
console.log(Footer)

  return (
    <>
        <Switch>
          <Route exact path='/'>
            <Main
              isLogin={isLogin}
            />
          </Route>
          <Route path='/saved-news'>
            <SavedNews
              isLogin={isLogin}
            />
          </Route>
        </Switch>
        <Footer />
    </>
  );
}

export default App;
