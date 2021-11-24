import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import BarChart from './BarChart';
import { VaccinationsChart } from './VaccinationsChart';
import PeopleChart from './PeopleChart';


ReactDOM.render(
  <>
    <h1>Welcome to embedded Tableau</h1>
    <div>
      <VaccinationsChart />
    </div>

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

