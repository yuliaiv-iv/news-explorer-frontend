import React from 'react';
import { Logout } from '../Icons/Logout';
import { Logo } from '../Icons/Logo';
import Navigation from '../Navigation/Navigation';
import InternalLink from '../InternalLink/InternalLink';
import Button from '../Button/Button';
import './Header.css';

function Header({ onClick, isLogin, theme }) {

  return (
    <header className={`header header_${theme}`}>
      <div className='header__container'>
      <Logo
      />
      <Navigation
        section='header'
        container={
          <Button
            className='header'
            modifier={`header__button_${theme}`}
            onClick={onClick}
            button={isLogin ? 'Грета' : 'Авторизоваться'}
          >
            {isLogin ?
              <Logout
                className='header__logout'
              /> :
              null
            }
          </Button>
        }
      >
        <InternalLink
          section='header'
          theme={theme}
          path='/'
          text='Главная'
        />
        <InternalLink
          section='header'
          theme={theme}
          path='/saved-news'
          text='Сохранённые статьи'
        />
      </Navigation>
      </div>
    </header>
  )
}

export default Header;


