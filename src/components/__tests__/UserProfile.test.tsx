import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { UserProfile } from '../UserProfile';
import { UserProfileService } from '../UserProfileService';

Enzyme.configure({ adapter: new Adapter() });

describe('UserProfile', () => {
  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());
  });

  test('renders correctly', async () => {
    // given​
    const promise = Promise.resolve({ name: 'name', desc: 'desc' });
    UserProfileService.getProfile = jest.fn().mockReturnValue(promise);
    const component = <UserProfile />;
    // when​
    const wrapper = shallow(component);
    await promise;
    // then​
    expect(wrapper.find('UserProfileContent').prop('name')).toEqual('name');
    expect(wrapper.find('UserProfileContent').prop('desc')).toEqual('desc');
  });
  test('onExpand triggered => renders correctly ', async () => {
    // given​
    const promise = Promise.resolve({ name: 'name', desc: 'desc' });
    UserProfileService.getProfile = jest.fn().mockReturnValue(promise);
    const component = <UserProfile />;
    const wrapper = shallow(component);
    await promise;
    // when​
    const onExpand = wrapper.find('UserProfileContent').prop('onExpand') as () => void;
    onExpand();
    // then​
    expect(wrapper.find('UserProfileContent').prop('descRendered')).toBeTruthy();
  });
});
