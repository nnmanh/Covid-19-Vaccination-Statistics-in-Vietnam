import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Main from './Main';
import Extension from './Extension'
import Footer from "./Footer"
import Scroll from './Scroll'



ReactDOM.render(
  <>
    
    
      <div>
        <Router>
          <Scroll/>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/Extension" component={Extension} />     
          </Switch>
         
        </Router>
    </div>
    <Footer/>
   

  </>,
  document.getElementById('root')
);

