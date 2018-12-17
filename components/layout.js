import React from 'react';
import Header from './header';
import Footer from './footer';

export default class Layout extends React.Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const WOW = require('wow.js');
      new WOW().init();
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
