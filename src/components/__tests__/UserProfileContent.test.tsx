import React from 'react';

import { UserName } from '../UserName';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { UserProfileContent } from '../UserProfileContent';

Enzyme.configure({ adapter: new Adapter() });

test('renders correctly', () => {
  // given​
  const onExpand = jest.fn();
  const component = <UserProfileContent name={'name'} desc={'desc'} descRendered={true} onExpand={onExpand} />;
  // when​
  const wrapper = shallow(component);
  // then​
  expect(wrapper.find('UserName')).toHaveLength(1);
  expect(wrapper.find('UserProfileDescription')).toHaveLength(1);
  expect(wrapper.find('UserName').prop('name')).toEqual('name');
  expect(wrapper.find('UserProfileDescription').prop('desc')).toEqual('desc');
  expect(wrapper.find('UserProfileDescription').prop('desc')).toBeTruthy();
});
