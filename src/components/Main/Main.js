import React, { useState } from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Wrapper from '../Wrapper/Wrapper';

function Main({ isOpen, articles, isHidden, addArticle, removeArticle }) {

  // const [error, setError] = useState(false);

  return (
    <>
      <main className='main'>
        <Wrapper section='main'>
          <Preloader
            isOpen={isOpen}
          />
          <NewsCardList
            articles={articles}
            isHidden={isHidden}
            addArticle={addArticle}
            removeArticle={removeArticle}
          />
        </Wrapper>
      </main>
    </>
  )
}

export default Main;