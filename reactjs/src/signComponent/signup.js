import React, { Component } from 'react';
import './sign.css';
class SignUp extends Component {
  constructor(props){
    super(props);
    this.state ={
      "id":null,
      "firstname":'',
      "lastname":'',
      "email_id":'',
      "phone_no":'',
      "password":'',
      "confirm_password":'',
      "created_at":'',
      "updated_at":'',
    }
  }
  handleChange=(event)=>{
    var n=event.target.name;
    var v=event.target.value;
    this.setState({
      [n] :v
    });
  }
  submitForm=(event)=>{
    this.submit(this.state);
  }
    async submit(data){
      await fetch("http://localhost:3001/users/signup",{
        method:'post',
        mode:'cors',
        headers:{ 
          'Accept':'application/json',
          'content-type':'application/json'
        },
        body:JSON.stringify(data),
      });
    }


  SignUp(){
    return (
      <div> 
      <div className="signup-form adj-signup">
      <form onSubmit={this.submitForm} >
      <div className="form-group">
      <div className="row">
         <div className="col"><input type="text" className="form-control" name="firstname" placeholder="First Name" onChange={this.handleChange}  required="required"/></div>
         <div className="col"><input type="text" className="form-control" name="lastname" placeholder="Last Name" onChange={this.handleChange}  required="required"/></div>
      </div>        	
      </div>
      <div className="form-group">
        	<input type="text" className="form-control" name="phone_no" placeholder="Phone No" onChange={this.handleChange} required="required"/>
        </div>
      <div className="form-group">
        	<input type="email" className="form-control" name="email_id" placeholder="Email" onChange={this.handleChange} required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleChange} required="required"/>
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
