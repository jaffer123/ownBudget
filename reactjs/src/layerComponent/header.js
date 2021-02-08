import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './layer.css'
import logo from '../../public/symbol.png';
class Header extends Component {
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
            <div className="col-sm-2 button-place">
            <Link to="/signup" params={{ testvalue: "hello" }}
               className="btn btn-info button"> Sign Up
            </Link>
            <Link to="/signin">
              <button className="btn btn-light">Sign In</button>
            </Link>
            </div>
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
