import React, { Component } from 'react';
import Header from './header';

class Layer extends Component {
  render() {
    return (
        <div>
        <Header/>
        {this.props.children}
        </div>
    );
  }
}

export default Layer;
