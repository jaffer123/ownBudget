import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './layer.css'
import logo from '../../public/symbol.png';
import Profile from './profile';
class Header extends Component {


  profile(){

    if(window.location.pathname==='/home'){
        return (
          <div>
            <Profile/>
          </div>
        );
    }else{
      return(
          <div className="col-sm-2 button-place">
          <Link to={{ pathname:'/', state:{address: "signup"} }} className="btn btn-info button">Sign Up</Link>
          <Link to={{ pathname:'/', state:{address: "signin"} }} className="btn btn-light">Sign In</Link>
        </div>
      );
    }
  }
    header(){
        return (
            <div className="row header">
            <div className="col-sm-4">
            <table>
            <tbody>
            <tr>
             <td><img className='img' src={logo} alt='logo'/></td>
             <td><h5>Own Budget</h5></td>
             </tr>
             </tbody>
             </table>
            </div>
            <div className="col-sm-5">
            </div>
           {this.profile()}
            </div>
        )
    }
  render() {
    return (
    <div>
        {this.header()}
    </div>
    );
  }
}

export default Header;
