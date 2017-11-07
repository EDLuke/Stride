import 'react-native';
import React from 'react';
import Setting from '../Setting';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Setting />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});