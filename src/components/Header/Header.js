import React from 'react';
import { Logo } from '../../images';
import Navigation from '../Navigation/Navigation';
import './Header.css'

function Header() {
  return (
    <header className='header'>
      <Logo className='header__logo'/>
      <Navigation />
    </header>
  )
}

export default Header;