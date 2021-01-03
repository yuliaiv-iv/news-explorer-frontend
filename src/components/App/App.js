import React, { useEffect, useState } from 'react';
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

  return (
    <div className='page'>
      <Main
        onClick={handlePopupOpen}
      />
    </div>
  );
}

export default App;
