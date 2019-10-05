import React from 'react';
import { Button } from '@material-ui/core';
import FlashOn from '@material-ui/icons/FlashOn';

import Filter from '../../components/Filter';
import { ContentTitleButton } from './styles';

import ReactLoader from '../../components/Loader';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default function Teams() {
  const filterby = [
    {
      name: 'Team',
      value: 'team',
      selected: true,
    },
    {
      name: 'Role',
      value: 'role',
      selected: false,
    },
    {
      name: 'Score',
      value: 'score',
      selected: false,
    },
  ];
  return (
    <>
      <ContentTitleButton>
        <h1>Teams</h1>
        <Button variant="contained" size="large">
          <FlashOn />
          AUTO SORT TEAM
        </Button>
      </ContentTitleButton>
      <Filter filterby={filterby} who="team" />
    </>
  );
}
