import React, { useState } from 'react';
import './Footer.css';
// import { FaceBook, GitHub } from '../../images';
import Navigation from '../Navigation/Navigation';
import Link from '../NavLink/Link';

function Footer() {

  return (
    <footer className='footer'>
      <p className='footer__copyright'>&copy; 2020 Supersite, Powered by News API</p>
      <Navigation
        section='footer'
        container={<nav className='footer__social'>
          {/* <a rel='noreferrer'><GitHub /></a>
          <a rel='noreferrer'><FaceBook /></a> */}
        </nav>}
      >
        <Link
          theme='light'
          section='footer'
          path='/'
          text='Главная'
        />
        <a
          className='link footer__link'
          href='https://praktikum.yandex.ru'
          target='_blank'
          rel='noreferrer'
        >
          Яндекс.Практикум
        </a>
      </Navigation>
    </footer>
  )
}

export default Footer;
