import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
import "./LoginPage.css"

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({

      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);

      this.props.handleSignupOrLogin();

      this.props.history.push('/books');
    } catch (err) {

      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-content">
          <h1 className="login-title">Log In</h1>
          <form className="form-horizontal col" onSubmit={this.handleSubmit} >
            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button className="btn btn-primary">Log In</button>&nbsp;&nbsp;&nbsp;
                <Link to='/' className="btn btn-danger">Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;