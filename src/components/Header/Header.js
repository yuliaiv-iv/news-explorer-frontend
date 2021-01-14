import React from 'react';
import { Logo, Logout } from '../../images';
import Navigation from '../Navigation/Navigation';
import SubmitButton from '../SubmitButton/SubmitButton';
import './Header.css';

function Header({ onClick, isLogin, theme }) {

  return (
    <header className={`header header__border_${theme}`}>
      <Logo
        className='header__logo'
        pathStyle={`header__logo_${theme}`}
      />
      <Navigation
        theme={theme}
      />
      <SubmitButton
        name='header'
        modifier={`header__button_${theme}`}
        onClick={onClick}
        button={isLogin ? 'Грета' : ''}
      >
        <Logout
          svgStyle='header__logout'
          pathStyle={`header__logout_${theme}`}
        />
      </SubmitButton>
    </header>
  )
}

export default Header;
