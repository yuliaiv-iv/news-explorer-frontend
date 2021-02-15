import React, { useState } from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Wrapper from '../Wrapper/Wrapper';

function Main({ notFound, isOpen, articles, isShown, addArticle, removeArticle }) {

  return (
    <>
      <main className='main'>
        <Wrapper section='main'>
          <Preloader
            isOpen={isOpen}
            notFound={notFound}
          />
          <NewsCardList
            articles={articles}
            isShown={isShown}
            addArticle={addArticle}
            removeArticle={removeArticle}
          />
        </Wrapper>
      </main>
    </>
  )
}

export default Main;