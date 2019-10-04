import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
