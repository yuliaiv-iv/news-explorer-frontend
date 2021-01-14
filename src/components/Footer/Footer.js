import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// import { FaceBook, GitHub } from '../../images';
import { external as links } from '../../utils/external';

function Footer() {

  return (
    <footer className='footer'>
      <p className='footer__copyright'>© 2020 Supersite, Powered by News API</p>
      <nav className='footer__nav'>
      </nav>
      <nav className='footer__nav'>
      </nav>
    </footer>
  )
}

export default Footer;
