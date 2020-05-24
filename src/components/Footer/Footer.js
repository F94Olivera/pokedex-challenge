import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="d-flex justify-content-center">
      <p>
        {'<> '}
        with{' '}
        <span className="icon" style={{ color: '#000000' }}>
          &#9829;
        </span>{' '}
        by F94
      </p>
    </div>
  );
}

export default Footer;
