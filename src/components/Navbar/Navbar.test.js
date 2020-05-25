import React from 'react';
import { mount } from 'enzyme';
import Navbar from './Navbar';
import ThemeContextProvider from '../../contexts/ThemeContext';
import { ThemeContext } from '../../contexts/ThemeContext';

describe('<Navbar />', () => {
  it('>>>> should render all elements', () => {
    const wrapper = mount(
      <ThemeContextProvider>
        <Navbar />
      </ThemeContextProvider>
    );

    expect(wrapper.find('div.container-fluid')).toBeDefined();
    expect(wrapper.find('nav.navbar')).toHaveLength(1);
    expect(wrapper.find('h5.navbar-brand')).toHaveLength(1);
    expect(wrapper.find('div.custom-control')).toHaveLength(1);
  });
});
