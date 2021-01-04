import React, { useEffect, useState } from 'react';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Register from '../Register/Register';
// import About from '../About/About';
// import Header from '../Header/Header';
// import SearchForm from '../SearchForm/SearchForm';
import './App.css';


function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  function handlePopupOpen() {
    setIsLoginOpen(true);
  }

  function handleTogglePopup() {
    if(isLoginOpen) {
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
    <div className='page'>
      <Main
        onClick={handlePopupOpen}
      />
      <Login
        isOpen={isLoginOpen}
        onClose={closeAllPopups}
        onToggle={handleTogglePopup}
      >
      </Login>
      <Register
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        onToggle={handleTogglePopup}
      >
      </Register>
    </div>
  );
}

export default App;
