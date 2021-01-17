import React from 'react';
import './Link.css';
import { NavLink } from 'react-router-dom';



function Link({ path, section, theme, text }) {
  return (
    <NavLink
      exact to={path}
      className={`link ${section}__link ${section}__link_${theme}`}
      activeClassName={`${section}__active ${section}__active_${theme}`}
    >
      {text}
    </NavLink>
  )
}

export default Link;


