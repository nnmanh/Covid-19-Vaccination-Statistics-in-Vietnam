import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import BarChart from './BarChart';
import VaccinationsChart3 from './VaccinationsChart';
import PeopleChart from './PeopleChart';
import Count from './Count';
import Horizontal from './Horizontal';


ReactDOM.render(
  <>
    <h1>Welcome to embedded Tableau</h1>
    <div style = {{textAlign: "center"}}>
      <Count />
      <Horizontal />
    </div>
    {/*
    <div>
      <VaccinationsChart3 />
    </div>
    */}

    <div>
      <PeopleChart />
    </div>

    <div>
      <Map />
      <BarChart />
    </div>
    
    

  </>,
  document.getElementById('root')
);

