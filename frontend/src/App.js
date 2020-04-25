import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Login from './components/login';
import reg_buyer from './components/reg_buyer';
import reg_seller from './components/reg_seller';
import Home from './components/home';
import Buyer_view from './components/buyer_view';
import Seller_view from './components/seller_view';
import Buyer_view_items from './components/buyer_view_items';
import Done_shopping from './components/done_shopping';
function App() {
  return (
    <Router>
    <div class="Fir">
        <nav class="navbar navbar-expand-sm">
          <div>
          <a class="navbar-brand" onClick="localstorage.clear();" href="/home">Home</a>
          </div>
          <div>
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link"  href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/reg_buyer">New Buyer</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/reg_seller">New Seller</a>
          </li>
          </ul>
          </div>
        </nav>
         <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/reg_seller" component={reg_seller}/>
        <Route path="/reg_buyer" component={reg_buyer}/>
        <Route path="/buyer_view" component={Buyer_view}/>
        <Route path="/seller_view" component={Seller_view}/>
        <Route path="/buyer_view_items" component={Buyer_view_items}/>
        <Route path="/buyer_view_items/done_shopping" component={Done_shopping}/>
        </div>
    </Router>
  );
}

export default App;
