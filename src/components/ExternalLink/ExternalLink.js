import React from 'react';
import './ExternalLink.css';

function ExternalLink({ href, section, children }) {
  return (
    <a
      className={`link ${section}__link`}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  )
}

export default ExternalLink;