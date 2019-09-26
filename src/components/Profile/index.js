import React from 'react';
import { Link } from 'react-router-dom';

import { UserProfile } from './styles';

export default function componentName() {
  return (
    <UserProfile>
      <Link to="/dashboard" title="User Profile">
        <strong>ADMIN NAME</strong>
        <img
          src="https://api.adorable.io/avatars/30/wevert.png"
          alt="ADMIN NAME"
        />
      </Link>
    </UserProfile>
  );
}
