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