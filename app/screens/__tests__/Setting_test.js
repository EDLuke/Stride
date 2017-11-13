import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Setting from '../Setting';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const wrapper = shallow(
      <Setting/>
    );
    expect(wrapper).toMatchSnapshot();
});