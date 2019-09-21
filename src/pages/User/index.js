import React from 'react';

// import { Container } from './styles';

export default function User({ match }) {
  const { id } = match.params;
  console.log(id);
  return <h1>Caio</h1>;
}
