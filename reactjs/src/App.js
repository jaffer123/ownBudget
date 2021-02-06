import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import A from './aComponent/a';
import Layout from './layerComponent/layout';
import '../public/bootstrap/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={A}/>
          </Switch>
        </Router>
      </Layout>
      </div>
    );
  }
}

export default App;
