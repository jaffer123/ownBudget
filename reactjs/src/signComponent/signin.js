import React, { Component } from 'react';
import './sign.css';
class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="signup-form adj-signup">
          <form action="#" method="post">
          <div className="form-group">
          <div className="form-group">
          	<input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Sign In</button>
          </div>
          </div>
          </form>
        </div> 
      </div>
    );
  }
}

export default SignIn;
