import React from 'react';
import { Logo } from '../../images';
import Navigation from '../Navigation/Navigation';
import './Header.css'

function Header({onClick}) {
  return (
    <header className='header'>
      <Logo className='header__logo'/>
      <Navigation />
      <button className='header__btn' onClick={onClick}>Авторизоваться</button>
    </header>
  )
}

export default Header;