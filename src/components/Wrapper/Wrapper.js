import React from 'react';
import './Wrapper.css';

function Wrapper({ children }) {

  return (
    <section className='section__wrapper'>{children}</section>
  )
}

export default Wrapper;