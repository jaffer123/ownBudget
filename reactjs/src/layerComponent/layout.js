import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import './layer.css'
class Layer extends Component {
  render() {
    return (
        <div className='top'>
        <Header/>
        {this.props.children}
        <Footer/>
        </div>
    );
  }
}

export default Layer;
