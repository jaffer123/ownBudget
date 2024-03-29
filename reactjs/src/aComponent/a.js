import React, { Component } from 'react';
import SignUp from '../signComponent/signup';
import LeftSide from './leftside';
import RightSide from './rightside';
import Content from './content';
import SignIn from '../signComponent/signin';
import Header from '../layerComponent/header'
class a extends Component {
  
  chooseForm(){
    if(this.props.location.state){

      if(this.props.location.state.address === 'signin')
        var isLoggedIn ='signin';
      else
         isLoggedIn ='signup';  
    }

    if (isLoggedIn==='signin') {
      return <SignIn />;  
    }else{
      return <SignUp />;
    }
  }

  RenderPage(){
    return (
      <div>
        <Header/>
      <div className='row'>
        <div className='col-sm-4'> 
        <LeftSide />
        </div>
        <div className='col-sm-5'>
        <RightSide />
        </div>
        <div className='col-sm-3'>
          {this.chooseForm()}
          {/* <SignIn /> */}
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
