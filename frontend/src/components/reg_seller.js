import React, { Component } from 'react';
import axios from 'axios';
export default class reg_buyer extends Component {

  constructor(props) {
      super(props);

      this.state = {
          username: '',
          password: '',
          secondpassword: '',
          email: '',
          shop: '',
          phone: '',
          address:'',
          pincode:''
      }

      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangepassword = this.onChangepassword.bind(this);
      this.onChangesecondpassword = this.onChangesecondpassword.bind(this);
      this.onChangeemail = this.onChangeemail.bind(this);
      this.onChangeshop = this.onChangeshop.bind(this);
      this.onChangephone = this.onChangephone.bind(this);
      this.onChangeaddress = this.onChangeaddress.bind(this);
      this.onChangepincode = this.onChangepincode.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }


  onChangeUsername(event) {
      this.setState({ username: event.target.value });
  }

  onChangepassword(event) {
      this.setState({ password: event.target.value });
  }

  onChangesecondpassword(event) {
      this.setState({ secondpassword: event.target.value });
  }

  onChangeemail(event) {
      this.setState({ email: event.target.value });
  }

  onChangeshop(event) {
      this.setState({ shop: event.target.value });
  }

  onChangephone(event) {
      this.setState({ phone: event.target.value });
  }

  onChangeaddress(event) {
      this.setState({address: event.target.value });
  }

  onChangepincode(event) {
      this.setState({ pincode: event.target.value });
  }

  onSubmit(e) {
      e.preventDefault();

      const newUser = {
          username: this.state.username,
          password: this.state.password,
          secondpassword: this.state.secondpassword,
          email: this.state.email,
          shop:this.state.shop,
          phone: this.state.phone,
          address:this.state.address,
          pincode:this.state.pincode
      }
      console.log(newUser.user_type)

      axios.post('http://localhost:4000/add', newUser)
          .then(res =>{
              console.log(res.data.msg);
              alert(res.data.msg)
          });

      this.setState({
          username: '',
          password: '',
          secondpassword: '',
          email: '',
          shop:'',
          phone: '',
          address:'',
          pincode:''
      });
  }


    render() {
        return (
          <div>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                    />
                </div>

                <div className="form-group">
                    <label>Password: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangepassword}
                    />
                </div>

                <div className="form-group">
                    <label>Re-enter Password: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.secondpassword}
                        onChange={this.onChangesecondpassword}
                    />
                </div>

                <div className="form-group">
                    <label>Email: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeemail}
                    />
                </div>

                <div className="form-group">
                    <label>Shopname: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.shop}
                        onChange={this.onChangeshop}
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.phone}
                        onChange={this.onChangephone}
                    />
                </div>

                <div className="form-group">
                    <label>Address: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.address}
                        onChange={this.onChangeaddress}
                    />
                </div>

                <div className="form-group">
                    <label>Pincode: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.pincode}
                        onChange={this.onChangepincode}
                    />
                </div>

                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
          </div>
        )
    }
}
