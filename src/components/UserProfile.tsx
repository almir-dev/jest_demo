import React from 'react';
import { UserProfileContent } from './UserProfileContent';
import { UserProfileModelView, UserProfileService } from './UserProfileService';

export function UserProfile() {
  const [expanded, expand] = React.useState(false);
  const [profile, setProfile] = React.useState<UserProfileModelView>({ name: 'none', desc: 'none' });
  React.useEffect(() => {
    UserProfileService.getProfile().then((profile) => setProfile(profile));
  }, []);
  const expandHandler = () => expand(!expanded);
  return <UserProfileContent name={profile.name} desc={profile.desc} descRendered={expanded} onExpand={expandHandler} />;
}
