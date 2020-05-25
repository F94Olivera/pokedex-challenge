import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';
import ThemeContextProvider from '../../contexts/ThemeContext';

describe('<Footer />', () => {
  it('>>>> should render all elements', () => {
    const wrapper = mount(
      <ThemeContextProvider>
        <Footer />
      </ThemeContextProvider>
    );
    expect(wrapper.find('p')).toBeDefined();
    expect(wrapper.find('span.icon')).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
