import React from 'react';
import './Navigation.css';

function Navigation({ container, children, section }) {
  return (
    <div className={`nav ${section}__nav`}>
      <nav className={`nav__list ${section}__list`}>
        {children}
      </nav>
      {container}
    </div>
  )
}

export default Navigation;
