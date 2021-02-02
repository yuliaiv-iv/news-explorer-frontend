import React from 'react';
import Header from '../components/Header/Header';
import SavedNews from '../components/SavedNews/SavedNews';

function SavedNewsPage({ onSignOut, savedArticles, removeArticle }) {

  return (
    <>
      <Header
        theme='dark'
        onSignOut={onSignOut}
      />
      <SavedNews
        savedArticles={savedArticles}
        removeArticle={removeArticle}
      />
    </>
  )
}

export default SavedNewsPage;