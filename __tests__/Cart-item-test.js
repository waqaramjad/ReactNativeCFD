import React from 'react';
import renderer from 'react-test-renderer';
import CartItem from '../components/CartItem';

test('renders correctly', () => {
  const tree = renderer.create(<CartItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
