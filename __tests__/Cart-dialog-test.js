import React from 'react';
import renderer from 'react-test-renderer';
import CartDialog from '../components/CartDialog';

test('renders correctly', () => {
  const tree = renderer.create(<CartDialog />).toJSON();
  expect(tree).toMatchSnapshot();
});
