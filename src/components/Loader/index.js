import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function ReactLoader() {
  return (
    <Loader
      type="MutatingDots"
      color="#FF5700"
      height={100}
      width={100}
      className="loader"
    />
  );
}
