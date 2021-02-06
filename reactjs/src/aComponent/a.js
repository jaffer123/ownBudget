import React, { Component } from 'react';
import SignUp from '../signComponent/signup';
import LeftSide from './leftside';
import RightSide from './rightside';
class a extends Component {
  RenderPage(){
    return (
      <div className='row'>
        <div className='col-sm-4'>
        <LeftSide />
        </div>
        <div className='col-sm-5'>
        <RightSide />
        </div>
        <div className='col-sm-3'>
        <SignUp />
        </div>
      </div>
    )
  }
  render() {
    return (
    <div> {this.RenderPage()}</div>
    );
  }
}

export default a;
