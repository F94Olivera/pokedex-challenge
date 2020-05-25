import React from 'react';
import { mount } from 'enzyme';
// import Navbar from './Navbar';
import ThemeContextProvider from './ThemeContext';
import { ThemeContext } from './ThemeContext';

describe('<Navbar />', () => {
  it('>>>> should render all elements', () => {
    const TestComponent = () => {
      const { isLightTheme, toggleTheme } = React.useContext(ThemeContext);

      return (
        <>
          <div dataid="value">{isLightTheme.toString()}</div>
          <button onClick={toggleTheme}></button>
        </>
      );
    };
    const wrapper = mount(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );

    expect(wrapper.find('[dataid="value"]').text()).toEqual('true');

    wrapper.find('button').simulate('click');

    expect(wrapper.find('[dataid="value"]').text()).toEqual('false');
  });
});
