import React, { useState } from 'react';
import Header from '../components/Header/Header';
import SavedNews from '../components/SavedNews/SavedNews';

function SavedNewsPage({ isLogin }) {

  return (
    <>
      <Header
        theme='dark'
        isLogin={isLogin}
      />
      <SavedNews />
    </>
  )
}

export default SavedNewsPage;