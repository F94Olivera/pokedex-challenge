import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    // <!-- Navbar -->
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <h5 className="navbar-brand" href="#">
          Pokedex
        </h5>
        <div className="custom-control custom-switch">
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
