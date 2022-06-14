import React from 'react';
import renderer from 'react-test-renderer';
import Cart from '../components/Cart';

test('renders correctly', () => {
  const tree = renderer.create(<Cart />).toJSON();
  expect(tree).toMatchSnapshot();
});
