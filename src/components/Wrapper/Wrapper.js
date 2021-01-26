import React from 'react';
import './Wrapper.css';

function Wrapper({ children, section }) {

  return (
    <section className={`${section}__wrapper`}
    >
      {children}
    </section>
  )
}

export default Wrapper;