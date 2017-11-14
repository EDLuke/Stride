import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import SocialDetail from '../SocialDetail';
import { View } from 'react-native';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const wrapper = shallow(
      <SocialDetail/>
    );
  expect(wrapper).toMatchSnapshot();
});