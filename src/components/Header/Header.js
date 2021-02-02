import React, { useState, useContext } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { Logout } from '../Icons/Logout';
import { Logo } from '../Icons/Logo';
import Navigation from '../Navigation/Navigation';
import InternalLink from '../InternalLink/InternalLink';
import Button from '../Button/Button';
import './Header.css';
import { NavBar } from '../Icons/NavBar';
import { Closebtn } from '../Icons/Closebtn';
import { useUser } from '../../hooks/useUser';

function Header({ onClick, onSignOut, theme }) {

  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const { user } = useUser();
  const isLogged = !!user;

  let history = useHistory();
  function handleHistory() {
    history.push('/');
  }

  const headerClassname = (
    `header header_${theme} ${isOpen ? `header_open-${theme}` : ''}`
  );

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };

  return (
    <header
      className={headerClassname}
    >
      <div className='header__container'>
        <Logo
        />
        <Button
          onClick={handleClick}
          className='header'
          modifier='header__navbar'
        >
          {isOpen ?
            <Closebtn
              className={`header__close header__close_${theme}`}
            /> :
            <NavBar theme={theme} />
          }
        </Button>
        <Navigation
          modifier={`header__nav_${theme}`}
          section={!isOpen ? 'header' : 'header_open header'}
          container={
            <Button
              className='header'
              modifier={`header__button_${theme}`}
              onClick={isLogged ? onSignOut : onClick}
              button={isLogged ? user.name : 'Авторизоваться'}
            >
              {isLogged ?
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
            onClick={handleHistory}
          />
          {isLogged ?
            <InternalLink
              section='header'
              theme={theme}
              path='/saved-news'
              text='Сохранённые статьи'
            /> :
            null
          }
        </Navigation>
      </div>
    </header>
  )
}

export default Header;


