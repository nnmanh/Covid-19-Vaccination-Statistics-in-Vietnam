import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import BarChart from './BarChart';
import PeopleChart from './PeopleChart';
import Horizontal from './Horizontal';
import Header from './Header';
import Footer from "./Footer"

ReactDOM.render(
  <>
    <Header/>
    <div style = {{textAlign: "center"}}>
      
      <Horizontal />

     
    </div>

    <div>
      <PeopleChart />
    </div>

    <div>
      <Map />
      <BarChart />
      <Footer/>
    </div>
    
    

  </>,
  document.getElementById('root')
);

