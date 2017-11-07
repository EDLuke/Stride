import 'react-native';
import React from 'react';
import SwipeBackgroundView from '../SwipeBackgroundView';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SwipeBackgroundView />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});