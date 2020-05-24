import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../../contexts/ThemeContext';

function Footer() {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="d-flex justify-content-center"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <p style={{ background: theme.ui }}>
        {'<> '}
        with{' '}
        <span className="icon" style={{ color: theme.syntax }}>
          &#9829;
        </span>{' '}
        by F94
      </p>
    </div>
  );
}

export default Footer;
