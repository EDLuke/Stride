import 'react-native';
import React from 'react';
import VideoBackgroundView from '../VideoBackgroundView';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <VideoBackgroundView />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});