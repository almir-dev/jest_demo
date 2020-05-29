import * as React from 'react';
import { UserName } from './UserName';
import { UserProfileDescription } from './UserProfileDescription';

export function UserProfileContent(props: { name: string; desc: string; descRendered: boolean; onExpand: () => void }) {
  const { name, desc, descRendered, onExpand } = props;
  return (
    <div onClick={onExpand}>
      ​
      <UserName name={name} />​
      <UserProfileDescription desc={desc} rendered={descRendered} />​
    </div>
  );
}
