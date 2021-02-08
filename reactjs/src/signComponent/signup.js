import React, { Component } from 'react';
import './sign.css';
class SignUp extends Component {

  SignUp(){
    return (
      <div>
      <div className="signup-form adj-signup">
      <form action="#" method="post">
      <div className="form-group">
      <div className="row">
         <div className="col"><input type="text" className="form-control" name="first_name" placeholder="First Name" required="required"/></div>
         <div className="col"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required"/></div>
      </div>        	
      </div>
      <div className="form-group">
        	<input type="text" className="form-control" name="phone_no" placeholder="Phone No" required="required"/>
        </div>
      <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email" required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
        </div>
      <div className="form-group">
        <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
      </div>  
      <div className="form-group">
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </div>
      </form>  
   </div>
  </div>
    );
  }   
  render() {
    return (
    <div>{this.SignUp()}</div>
    );
  }
}

export default SignUp;
