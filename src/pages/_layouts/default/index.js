import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

import Navigation from '../../../components/Navigation';
import Profile from '../../../components/Profile';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Navigation />
      <Profile />
      <Content>{children}</Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
