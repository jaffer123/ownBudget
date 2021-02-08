import React, { Component } from 'react';
import './a.css';
class Leftside extends Component {

  leftSide(){
    return (
    <div className='block'>
      <br></br><br></br>
     <h1>Let Start Saving.</h1> 
     <p>Create budget plan.<br></br>
      Keep a journal of <b>income</b> and <b>expenses.</b><br></br>
      <b>Compare</b> the total income to the sum of expenses.</p>
    </div>
    )
  }
  render() {
    return (
      <div>{this.leftSide()}</div>
    );
  }
}

export default Leftside;
