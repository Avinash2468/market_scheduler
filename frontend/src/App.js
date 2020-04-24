import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Login from './components/login';
import reg_buyer from './components/reg_buyer';
import reg_seller from './components/reg_seller';
import Home from './components/home';
import Buyer_view from './components/buyer_view'
function App() {
  return (
    <Router>
    <div class="Fir">
        <nav class="navbar navbar-expand-sm">
          <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link"  href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Keep your mind busy this quarantine!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          </ul>
        </nav>
        <Route path="/home" component={Home}/>
        <Route path="/buyer_view" component={Buyer_view}/>
        </div>
    </Router>
  );
}

export default App;
