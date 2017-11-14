import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Charts from '../Charts';
import { View } from 'react-native';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const wrapper = shallow(
      <Charts/>
    );
  expect(wrapper).toMatchSnapshot();
});