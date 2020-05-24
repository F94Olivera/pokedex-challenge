import React, { useContext } from 'react';
import './Navbar.css';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="container-fluid"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <nav
        className="navbar navbar-expand-lg justify-content-between"
        style={{ background: theme.ui }}
      >
        <h5 className="navbar-brand" style={{ color: theme.syntax }} href="#">
          Pokedex
        </h5>
        <div
          className="custom-control custom-switch"
          style={{ color: theme.syntax }}
        >
          <input
            type="checkbox"
            className="custom-control-input"
            id="darkSwitch"
          />
          <label className="custom-control-label" htmlFor="darkSwitch">
            Dark Mode
          </label>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
