import React from 'react';
import './Footer.css';
import { FaceBook } from '../Icons/FaceBook';
import { GitHub } from '../Icons/Github';
import Navigation from '../Navigation/Navigation';
import InternalLink from '../InternalLink/InternalLink';
import ExternalLink from '../ExternalLink/ExternalLink';

function Footer() {

  return (
    <footer className='footer'>
      <p className='footer__copyright'>&copy; 2020 Supersite, Powered by News API</p>
      <Navigation
        section='footer'
        container={
          <nav className='footer__social'>
            <ExternalLink
              section='footer'
              href='https://github.com/yuliaiv-iv'
            >
              <GitHub />
            </ExternalLink>
            <ExternalLink
              section='footer'
              href='https://github.com/yuliaiv-iv'
            >
              <FaceBook />
            </ExternalLink>
          </nav>
        }
      >
        <InternalLink
          theme='light'
          section='footer'
          path='/'
          text='Главная'
        />
        <ExternalLink
          href='https://praktikum.yandex.ru'
          section='footer'
        >
          Яндекс.Практикум
        </ExternalLink>
      </Navigation>
    </footer>
  )
}

export default Footer;
