import React from 'react';
import { mount } from 'enzyme';
import Cards from './Cards';
import ThemeContextProvider from '../../contexts/ThemeContext';

const array = [
  { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
  { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
  { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
  { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
];

describe('<Cards />', () => {
  it('>>>> should render all elements', () => {
    const wrapper = mount(
      <ThemeContextProvider>
        <Cards cards={array} />
      </ThemeContextProvider>
    );
    expect(wrapper.find('.row')).toHaveLength(1);
  });
});
