import React, { Component } from 'react';

export default class reg_buyer extends Component {

    constructor(props) {
        super(props);
        }

    render() {
        return (
          <div>
            <div class="form-group">
             <label for="usr">Name:</label>
             <input type="text" class="form-control" id="usr"/>
            </div>
            <div class="form-group">
             <label for="pwd">Password:</label>
             <input type="password" class="form-control" id="pwd"/>
            </div>
            <div class="form-group">
             <label for="re-pwd">Re-enter password:</label>
             <input type="password" class="form-control" id="re-pwd"/>
            </div>
            <div class="form-group">
             <label for="shopname">Shopname:</label>
             <input type="text" class="form-control" id="shopname"/>
            </div>
            <div class="form-group">
             <label for="email">Email address:</label>
             <input type="text" class="form-control" id="email"/>
            </div>
            <div class="form-group">
             <label for="phone">Phone Number:</label>
             <input type="text" class="form-control" id="phone"/>
            </div>
            <div class="form-group">
             <label for="address">Address:</label>
             <input type="text" class="form-control" id="address"/>
            </div>
            <div class="form-group">
             <label for="pincode">Pincode:</label>
             <input type="text" class="form-control" id="pincode"/>
            </div>
          </div>
        )
    }
}
