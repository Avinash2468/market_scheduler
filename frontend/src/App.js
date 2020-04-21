import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Login from './components/login';
import reg_buyer from './components/reg_buyer';
import reg_seller from './components/reg_seller';
function App() {
  return (
    <Router>
    <div class="Fir">
        <nav class="navbar navbar-expand-sm">
          <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link"  href="#">Tips to stay safe</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Keep your mind busy this quarantine!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          </ul>
        </nav>
        <div class="containee">
          <h1>Social Distancing</h1>
          <h6>#STAYHOME,STAYSAFE</h6>
          <p>Make sure that you minimize human contact at all costs.</p>
          </div>
        <div className="containe">
          <div class="btn-group">
            <a href="/components/login.js" class="btn btn-warning" role="button">Login</a>
            <a href="/components/reg_buyer" class="btn btn-warning" role="button">Register as Buyer</a>
            <a href="/components/reg_seller" class="btn btn-warning" role="button" >Register as Seller</a>
          </div>
          <br/>
          <Route path="/components/login.js" component={Login}/>
          <Route path="/components/reg_buyer" component={reg_buyer}/>
          <Route path="/components/reg_seller" component={reg_seller}/>
        </div>
        </div>
    </Router>
  );
}

export default App;
