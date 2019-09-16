import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  MdInsertChart,
  MdPieChart,
  MdPerson,
  MdPeople,
  MdSettings,
} from 'react-icons/md';

import { Wrapper, Content, Navigation, Profile } from './styles';

export default function DefaultLayout({ children }) {
  const icons = [
    ['/dashboard', MdPieChart],
    ['/users', MdPerson],
    ['/teams', MdPeople],
    ['/settings', MdSettings],
  ];

  const iconColor = '#fff';
  const iconSize = 35;
  const { url: currentUrl } = children.props.match;

  return (
    <Wrapper>
      <Navigation>
        <div>
          <MdInsertChart color={iconColor} size={iconSize} />
        </div>
        <ul>
          {icons.map(([url, Icon]) => {
            const linkAttribute = currentUrl === url ? { active: 'true' } : {};
            const title =
              url
                .substring(1)
                .charAt(0)
                .toUpperCase() + url.substring(1).slice(1);
            return (
              <li key={url}>
                <Link to={url} {...linkAttribute} title={title}>
                  <Icon color={iconColor} size={iconSize} />
                </Link>
              </li>
            );
          })}
        </ul>
      </Navigation>
      <Content>{children}</Content>
      <Profile>
        <Link to="/dashboard" title="User Profile">
          <strong>ADMIN NAME</strong>
          <img
            src="https://api.adorable.io/avatars/30/wevert.png"
            alt="ADMIN NAME"
          />
        </Link>
      </Profile>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
