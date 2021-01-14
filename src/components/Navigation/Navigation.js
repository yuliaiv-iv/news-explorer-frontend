import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';



function Navigation({theme}) {
  return (
    <nav className='navbar'>
      <NavLink
        exact to='/'
        className={`navbar__link navbar__link_${theme}`}
        activeClassName={`navbar__active navbar__active_${theme}`}
      >
        Главная
      </NavLink>
      <NavLink
        exact to='/saved-news'
        className={`navbar__link navbar__link_${theme}`}
        activeClassName={`navbar__active navbar__active_${theme}`}
      >
        Сохранённые статьи
      </NavLink> 
    </nav>
  )
}

export default Navigation;