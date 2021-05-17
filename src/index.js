import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ArticlePage from "./pages/ArticlePage";
import Navigation from "./components/Navigation/Navigation";




ReactDOM.render(
  <React.StrictMode>
      <Router>
           <Navigation/>
          <Switch>

              <Route path="/" component={ Homepage } exact />
              <Route path="/about/" component={ About } exact />
              <Route path="/article/" component={ ArticlePage } exact />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


