import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Social from '../Social';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const wrapper = shallow(
      <Social/>
    );
    expect(wrapper).toMatchSnapshot();
});