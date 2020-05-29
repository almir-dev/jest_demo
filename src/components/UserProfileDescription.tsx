import * as React from 'react';

export function UserProfileDescription({ desc, rendered }: { desc: string; rendered: boolean }) {
  if (!rendered) {
    return null;
  }
  return <div>{`Description: ${desc}`}</div>;
}
