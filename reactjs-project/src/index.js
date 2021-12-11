import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from "./Footer";
import Navigation from './Navigation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './Main';
import Extension from './Extension'


ReactDOM.render(
  <>
    <Header />
    <div>
      <div className="all">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/extension" component={Extension} />
            
          </Switch>
        </Router>
      </div>

    </div>


    <div>
      <Footer />
    </div>



  </>,
  document.getElementById('root')
);

