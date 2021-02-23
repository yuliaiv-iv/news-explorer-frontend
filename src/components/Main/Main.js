import React from 'react';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Wrapper from '../Wrapper/Wrapper';

function Main({
  notFound,
  isOpen,
  articles,
  addArticle,
  removeArticle,
  handlePopupOpen,
  visibleCards,
  setVisibleCards
}) {

  return (
    <main className='main'>
      <Wrapper section='main'>
        <Preloader
          isOpen={isOpen}
          notFound={notFound}
        />
        {articles.length === 0 ? null : (
          <NewsCardList
            articles={articles}
            addArticle={addArticle}
            removeArticle={removeArticle}
            handlePopupOpen={handlePopupOpen}
            visibleCards={visibleCards}
            setVisibleCards={setVisibleCards}
          />
        )}
      </Wrapper>
    </main>
  )
}

export default Main;