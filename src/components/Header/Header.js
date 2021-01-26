import React from 'react';
import { Logout } from '../Icons/Logout';
import { Logo } from '../Icons/Logo';
import Navigation from '../Navigation/Navigation';
import InternalLink from '../InternalLink/InternalLink';
import Button from '../Button/Button';
import './Header.css';
import { NavBar } from '../Icons/NavBar';
import { Closebtn } from '../Icons/Closebtn';

function Header({ onClick, isLogin, theme }) {

  const [isOpen, setIsOpen] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
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


