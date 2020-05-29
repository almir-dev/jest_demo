export interface UserProfileModelView {
  name: string;
  desc: string;
}

class UserProfileServiceImpl {
  getProfile(): Promise<UserProfileModelView> {
    return Promise.resolve({ name: 'some-name', desc: 'some-desc' });
  }
}

export const UserProfileService = new UserProfileServiceImpl();
