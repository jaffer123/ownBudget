import React, { Component } from 'react';
import Footer from './footer';
import './layer.css'
class Layer extends Component {
  render() {
    return (
        <div className='top'>
        {this.props.children}
        <Footer/>
        </div>
    );
  }
}

export default Layer;
