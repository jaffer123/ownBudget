import React, { Component } from 'react';
import './sign.css';
class SignIn extends Component {
  constructor(props){
    super(props);
    this.state ={
      "email_id":'',
      "password":'',
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
    await fetch("http://localhost:3001/users/login",{
      method:'post',
      mode:'cors',
      headers:{
        'Accept':'application/json',
        'content-type':'application/json'
      },
      body:JSON.stringify(data),
    });
  }

  render() {
    return (
      <div>
        <div className="signup-form adj-signin">
          <form onSubmit={this.submitForm}> 
          <div className="form-group">
          <div className="form-group">
          	<input type="email" className="form-control" name="email_id" placeholder="Email" onChange={this.handleChange} required="required"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleChange} required="required"/>
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
