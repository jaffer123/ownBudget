import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import A from './aComponent/a';
import Layout from './layerComponent/layout';
import '../public/bootstrap/css/bootstrap.min.css';
import Home from './homeComponent/home';
 //import SignIn from './signComponent/signin';
// import SignUp from './signComponent/signup';
class App extends Component {
  
  render() {
    return (  
      <div className='overflow'>
        <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={A}/> 
            <Route exact path='/home' component={Home}/>
          </Switch>
      </Layout>
      </Router>
      </div>
    );
  }
}

export default App;
