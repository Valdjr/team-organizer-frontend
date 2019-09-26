import React from 'react';
import PropTypes from 'prop-types';
import empty from 'is-empty';

import { SimpleInformation } from '../../../styles/global';
import { Wrapper, Content } from './styles';

import Navigation from '../../../components/Navigation';
import Profile from '../../../components/Profile';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Navigation />
      <Profile />
      <Content>
        {empty(process.env.REACT_APP_SECRET_PASSWORD) ? (
          <SimpleInformation>
            Warning:
            <span>You must to fill .env document</span>
          </SimpleInformation>
        ) : (
          children
        )}
      </Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
