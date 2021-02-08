import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import A from './aComponent/a';
import Layout from './layerComponent/layout';
import '../public/bootstrap/css/bootstrap.min.css';
 import SignIn from './signComponent/signin';
// import SignUp from './signComponent/signup';
class App extends Component {
  
  render(props) {
    console.log(this)
    return (  
      <div className='overflow'>
        <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={A}/>
             <Route exact path='/signup' component={A}/>
            <Route exact path='/signin' component={SignIn}/>
          </Switch>
      </Layout>
      </Router>
      </div>
    );
  }
}

export default App;
