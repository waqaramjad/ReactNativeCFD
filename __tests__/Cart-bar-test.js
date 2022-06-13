import React from 'react';
import renderer from 'react-test-renderer';
import CartBar from '../components/CartBar';

test('renders correctly', () => {
  const tree = renderer.create(<CartBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
