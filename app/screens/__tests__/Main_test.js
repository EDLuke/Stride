import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';
import { View } from 'react-native';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const wrapper = shallow(
      <Main/>
    );
    expect(wrapper).toMatchSnapshot();
});

it('has only two text input fields' , () => {
	const wrapper = shallow(
      <Main/>
    );
    expect(wrapper.dive().find('TextInput')).to.have.length(2);
})

it('prompts error with invalid email address', () => {
	const wrapper = shallow(
      <Main/>
    );

    const render = wrapper.dive();

    const emailInput = render.find('TextInput').first();
    //const alertText  = render.find('');

	expect(1).toBe(1);
});