import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import BarChart from './BarChart';
import Try from './Try';


ReactDOM.render(
  <>
    <h1>Welcome to embedded Tableau</h1>
    <Map />
    <BarChart />

  </>,
  document.getElementById('root')
);

