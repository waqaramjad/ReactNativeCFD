import React from 'react';
import renderer from 'react-test-renderer';
import MenuCard from '../components/MenuCard';

test('renders correctly', () => {
  const tree = renderer.create(<MenuCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
