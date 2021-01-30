import React, { useState } from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Wrapper from '../Wrapper/Wrapper';

function Main({ isLogin, isOpen, articles, isHidden, addArticle }) {

  // const [error, setError] = useState(false);

  return (
    <>
      <main className='main'>
        <Wrapper section='main'>
          <Preloader
            isOpen={isOpen}
          />
          <NewsCardList
            isLogin={isLogin}
            articles={articles}
            isHidden={isHidden}
          />
        </Wrapper>
      </main>
    </>
  )
}

export default Main;