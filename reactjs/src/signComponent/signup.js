import React, { Component } from 'react';

class SignUp extends Component {

  SignUp(){
    return (
        <h1>Sign Up</h1>
    );
  }   
  render() {
    return (
    <div>{this.SignUp()}</div>
    );
  }
}

export default SignUp;
