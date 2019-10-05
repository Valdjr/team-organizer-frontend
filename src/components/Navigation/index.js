import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, LogoContainer } from './styles';
import Logo from '../../assets/logo.svg';

import {
  MdArrowBack,
  MdPieChart,
  MdPerson,
  MdPeople,
  MdSettings,
} from 'react-icons/md';

import history from '../../services/history';

export default function Navigation() {
  const currentUrl = history.location.pathname.split('/')[1];

  const icons = [
    ['dashboard', MdPieChart],
    ['users', MdPerson],
    ['teams', MdPeople],
    ['settings', MdSettings],
  ];

  if (['user'].includes(currentUrl)) {
    icons.unshift(['back', MdArrowBack]);
  }

  function handleThrowBack() {
    history.goBack();
  }

  const iconColor = '#fff';
  const iconSize = 35;

  return (
    <Nav>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
      </LogoContainer>
      <ul>
        {icons.map(([url, Icon]) => {
          const active = currentUrl === url;
          const back = url === 'back';
          const title =
            url
              .substring(0)
              .charAt(0)
              .toUpperCase() + url.substring(1).slice(0);
          const newAttributs = { active: String(active), full: String(back) };
          const gonnaDo = back
            ? { onClick: handleThrowBack }
            : { to: `/${url}` };
          return (
            <li key={url}>
              <Link to="/" {...gonnaDo} {...newAttributs} title={title}>
                <Icon color={back ? '#ff5700' : iconColor} size={iconSize} />
              </Link>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
}
