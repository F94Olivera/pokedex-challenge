import React from 'react';
import { mount } from 'enzyme';
import Pagination from './Pagination';
import ThemeContextProvider from '../../contexts/ThemeContext';

describe('<Pagination />', () => {
  it('>>>> should render all elements', () => {
    const wrapper = mount(
      <ThemeContextProvider>
        <Pagination />
      </ThemeContextProvider>
    );
    expect(wrapper.find('.container-fluid')).toHaveLength(1);
  });
});
