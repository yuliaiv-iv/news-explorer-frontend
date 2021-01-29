import React, { useState } from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Wrapper from '../Wrapper/Wrapper';

function Main({ isLogin, isOpen, articles, isHidden, onClick }) {

  // const [error, setError] = useState(false);

  // setTimeout(() => {
  //   if (isOpen) {
  //     setError(true)
  //   }
  // }, 3000);
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
            onClick={onClick}
          />
        </Wrapper>
      </main>
    </>
  )
}

export default Main;