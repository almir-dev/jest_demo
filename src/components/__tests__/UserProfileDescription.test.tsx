import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { UserProfileDescription } from '../UserProfileDescription';

Enzyme.configure({ adapter: new Adapter() });

test('renders correctly', () => {
  // given​
  const component = <UserProfileDescription desc={'desc'} rendered={false} />;
  // when​
  const wrapper = shallow(component);
  // then​
  expect(wrapper.isEmptyRender()).toBeTruthy();
});
