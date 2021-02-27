import React, { Component } from 'react';
import './sign.css';
import  { Redirect } from 'react-router-dom';
class SignIn extends Component {
  constructor(props){
    super(props);
    this.state ={
      "email_id":'',
      "password":'',
      submitted : false,
      responseData:[],
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
    event.preventDefault();
    this.submit(this.state);
  }

  async submit(data){
   let res= await fetch("http://localhost:3001/users/login",{
                   method:'post',
                   mode:'cors',
                   headers:{
                    'Accept':'application/json',
                    'content-type':'application/json'
                   },
                    body:JSON.stringify(data),
                   });

    let response = await res.json();   
    if(response !== 'login-failed'){
        this.setState({
          responseData:response.data,
          submitted:true});
        localStorage.setItem('userData',response.data.email_id);
        localStorage.setItem('Authentication','Bearer '+response.token);
    }else{
      alert(response);
    }
  } 

  render() {
      if (this.state.submitted) {
        return <Redirect data={this.state.responseData} to='/home'/>;
      }
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
