import React, { useState, useEffect } from 'react';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import SearchForm from '../components/SearchForm/SearchForm';
import Wrapper from '../components/Wrapper/Wrapper';
import * as news from '../utils/NewsApi';
import { useUser } from '../hooks/useUser';

function MainPage({
  removeArticle,
  onSignOut,
  addArticle,
  articles,
  setArticles,
  setIsShown,
  isShown,
  handlePopupOpen
}) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { user } = useUser();
  const isLogged = !!user;

  const [isOpen, setIsOpen] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  // useEffect(() => {
  //   window.onbeforeunload = () => {
  //     localStorage.setItem('articles', JSON.stringify(articles))
  //   }
  // }, [articles])

  // useEffect(() => {
  //   const storageArticles = JSON.parse(localStorage.getItem('articles'));
  //   if (storageArticles && isLogged) {
  //     setArticles(storageArticles);
  //     setIsShown(true);
  //   } else {
  //     setIsShown(false);
  //   }
  // }, [setArticles, isLogged]);


  const getArticles = (keyword) => {
    if (keyword === '') {
      setIsEmpty(true)
    } else {
      setIsOpen(true)
      setIsShown(false)
      setNotFound(false)
      setIsEmpty(false)
      news.searchArticles(keyword)
        .then((data) => {
          const newArticle = data.map((article) => ({
            keyword,
            ...article
          }))
          if (newArticle.length === 0) {
            setNotFound(true)
            setIsShown(false)
          } else {
            setArticles(newArticle)
            setIsShown(true)
            setIsOpen(false)
          }
        })
        .catch((err) => {
          setNotFound(true)
          setIsShown(false)
          console.log(`${err}`)
        })
    }
  };


  return (
    <>
      <Wrapper section='header'>
        <Header
          onClick={handlePopupOpen}
          onSignOut={onSignOut}
          theme='light'
        />
        <SearchForm
          getArticles={getArticles}
          isEmpty={isEmpty}
        />
      </Wrapper>
      <Main
        isOpen={isOpen}
        articles={articles}
        isShown={isShown}
        notFound={notFound}
        addArticle={addArticle}
        removeArticle={removeArticle}
        handlePopupOpen={handlePopupOpen}
      />
      <About />
    </>
  )
}

export default MainPage;