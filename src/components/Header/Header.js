import React from 'react';
import { Logo, Logout } from '../../images';
import Navigation from '../Navigation/Navigation';
import Link from '../NavLink/Link';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Header.css';

function Header({ onClick, isLogin, theme }) {

  return (
    <header className={`header header__border_${theme}`}>
      <div className='header__container'>
      <Logo
        className='header__logo'
        pathStyle={`header__logo_${theme}`}
      />
      <Navigation
        section='header'
        container={
          <SubmitButton
            name='header'
            modifier={`header__button_${theme}`}
            onClick={onClick}
            button={isLogin ? 'Грета' : 'Авторизоваться'}
          >
            {isLogin ?
              <Logout
                className='header__logout'
                pathStyle={`header__logout_${theme}`}
              /> :
              null
            }
          </SubmitButton>
        }
      >
        <Link
          section='header'
          theme={theme}
          path='/'
          text='Главная'
        />
        <Link
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


