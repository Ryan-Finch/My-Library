import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignUpForm';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='container'>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>

      </div>
    );
  }
}

export default SignupPage;