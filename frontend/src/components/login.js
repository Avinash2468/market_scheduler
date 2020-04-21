import React, { Component } from 'react';

export default class Login extends Component {

    constructor(props) {
        super(props);
        }

    render() {
        return (
          <div class="d-flex flex-column">
            <div class="form-group">
             <label for="usr">Name:</label>
             <input type="text" class="form-control" id="usr"/>
            </div>
            <div>
              <div class="form-group" >
               <label for="pwd">Password:</label>
               <input type="password" class="form-control" id="pwd"/>
              </div>
            </div>
          </div>
        )
    }
}
