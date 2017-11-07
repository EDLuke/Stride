import 'react-native';
import React from 'react';
import Social from '../Social';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Social />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});