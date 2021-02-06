import React, { Component } from 'react';

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
            <div className="col-sm-6">
            </div>
            <div className="col-sm-2">
            <button className="btn btn-info">Sign Up</button><button className="btn btn-light">Sign In</button>
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
