import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main';

ReactDOM.render(
  <Main />,
  document.getElementById('application')
);


// Components
// x Main
//  -- x Header
//       -- x Search-bar
//  -- x Welcome
//       -- x Search-bar (duplicate)
//  -- x Weather-full
//       -- x Weather-now
//       -- Weather-hourly
//       -- Weather-daily