import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Today from '../Today';
import { View } from 'react-native';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const wrapper = shallow(
      <Today/>
    );
  expect(wrapper).toMatchSnapshot();
});