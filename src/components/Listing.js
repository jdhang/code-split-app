import React, { Component } from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Header = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "Header" */ './Header')
});

const Navigation = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "Navigation" */ './Navigation')
});

const Footer = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "Footer" */ './Footer')
});

class Listing extends Component {
  render() {
    return (
      <div>
        <Header text="Listing" />
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default Listing;