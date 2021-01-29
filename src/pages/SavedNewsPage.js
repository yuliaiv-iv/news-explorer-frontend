import React from 'react';
import Header from '../components/Header/Header';
import SavedNews from '../components/SavedNews/SavedNews';
import { api } from '../utils/MainApi';

function SavedNewsPage({ isLogged, onSignOut, savedArticles }) {


  return (
    <>
      <Header
        theme='dark'
        isLogged={isLogged}
        onSignOut={onSignOut}
      />
      <SavedNews
        savedArticles={savedArticles}
      />
    </>
  )
}

export default SavedNewsPage;