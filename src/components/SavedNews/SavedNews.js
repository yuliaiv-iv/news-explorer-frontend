import React from 'react';
import Header from '../Header/Header';
import './SavedNews.css';
import { initialCards as cards } from '../../utils/data';
import Card from '../Card/Card';
import NewsInfo from '../NewsInfo/NewsInfo';

function SavedNews({ isLogin }) {

  return (
    <>
      <Header
        isLogin={isLogin}
        theme='black'
      />
      <NewsInfo />
      <section className='savednews'>
        <ul className='savednews__list'>
          {cards.map(card => <Card {...card} />)}
        </ul>
      </section>
    </>
  )
}

export default SavedNews;