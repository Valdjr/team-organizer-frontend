import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import crypto from 'crypto';

export default function UserLink({ children, userId, userName }) {
  function cryptIdName(idName) {
    const cipher = crypto.createCipher(
      'aes-256-ctr',
      process.env.REACT_APP_SECRET_PASSWORD
    );
    return cipher.update(idName, 'utf8', 'hex');
  }

  return (
    <Link to={`/user/${cryptIdName(`${userId}-${userName}`)}`} title={userName}>
      {children}
    </Link>
  );
}

UserLink.propTypes = {
  children: PropTypes.element.isRequired,
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
