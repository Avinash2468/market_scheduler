import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './login';
import reg_buyer from './reg_buyer';
import reg_seller from './reg_seller';
import Buyer_view from './buyer_view';
export default class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Router>
      <div>
        <div class="containee">
          <h1>Social Distancing</h1>
          <h6>#STAYHOME,STAYSAFE</h6>
          <p>Make sure that you minimize human contact at all costs.</p>
        </div>
      </div>
      </Router>
    )
  }
}
