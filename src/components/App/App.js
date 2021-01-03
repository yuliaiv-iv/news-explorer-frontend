import React, { useEffect, useState } from 'react';
import Login from '../Login/Login';
import Main from '../Main/Main';
// import About from '../About/About';
// import Header from '../Header/Header';
// import SearchForm from '../SearchForm/SearchForm';
import './App.css';


function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handlePopupOpen() {
    setIsPopupOpen(true);
  }

  function closeAllPopups() {
    setIsPopupOpen(false);
  }

  return (
    <div className='page'>
      <Main
        onClick={handlePopupOpen}
      />
      <Login
        isOpen={isPopupOpen}
        onClose={closeAllPopups}
      >
      </Login>
    </div>
  );
}

export default App;
