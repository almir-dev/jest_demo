import React from 'react';

import { UserName } from '../UserName';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

test('renders correctly', () => {
  // given​
  const component = <UserName name={'name'} />;
  // when​
  const wrapper = shallow(component);
  // then​
  expect(wrapper.text()).toEqual('Username: name');
});
