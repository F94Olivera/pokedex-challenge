import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      syntax: '#000',
      ui: '#eee',
      bg: '#fff',
    },
    dark: {
      syntax: '#eee',
      ui: '#333',
      bg: '#000',
    },
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
    document.body.style.backgroundColor = this.state.isLightTheme
      ? 'black'
      : 'white';
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
