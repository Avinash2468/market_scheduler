import React, { Component, ReactDOM } from 'react';
import axios from 'axios';
//import users from './user_list_test.js';
export default class Buyer_view extends Component {
  constructor(props) {
       super(props);
       this.state = {lolol: []}
   }

   componentDidMount(){
       const send={
           pincode: localStorage.getItem("pincode")
       }
       axios.post('http://localhost:4000/buyer/view',send)
           .then(response => {
               this.setState({lolol: response.data});
                console.log(send.pincode);
               console.log("products");
               console.log(response.data)
           })
           .catch(function(error) {
               console.log(error);
           })
   }
    render() {
        return (
          <div>
          {this.state.lolol.map((usermeh, index) => (
            <div key={index}>
              <h3>{usermeh.username}</h3>
              <p>{usermeh.shopname}</p>
              <p>{usermeh.phone}</p>
            </div>
          ))}
          </div>
        );
    }
}
