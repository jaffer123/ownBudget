import React, { Component } from 'react';
import SignUp from '../signComponent/signup';
import LeftSide from './leftside';
import RightSide from './rightside';
import Content from './content';
import SignIn from '../signComponent/signin';
class a extends Component {
  
  chooseForm(){
    const isLoggedIn = this.props.location.state.address?this.props.location.state.address:'signup';
    if (isLoggedIn==='signin') {
      return <SignIn />;  
    }else{
      return <SignUp />;
    }
  }

  RenderPage(){
    return (
      <div>
      <div className='row'>
        <div className='col-sm-4'> 
        <LeftSide />
        </div>
        <div className='col-sm-5'>
        <RightSide />
        </div>
        <div className='col-sm-3'>
          {/* {this.chooseForm()} */}
          <SignIn />
        </div>
      </div>
      <hr></hr>
      <Content />
      <br/><br/>
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
