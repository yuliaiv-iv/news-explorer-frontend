import React from 'react';
import './Navigation.css';
import { Route, Switch, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='navbar'>
      <NavLink
        exact to="/"
        activeClassName="navbar__link_active"
        className="navbar__link"
      >
        Главная
      </NavLink>
      {/* <NavLink
        exact to="/saved-news"
        className="navbar__link"
        activeClassName="navbar__link_active"
      >
        Сохранённые статьи
      </NavLink> */}
      <button className='navbar__btn'>Авторизоваться</button>
    </nav>
  )
}

export default Navigation;