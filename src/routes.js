import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
// import App from './App';
// import Listing from './components/Listing';

const Loading = () => <div>Loading...</div>;

const App = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "App" */ './App')
});

const Listing = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "Listing" */ './components/Listing')
});

const routes = (
  <Fragment>
    <Route exact path="/" component={App} />
    <Route path="/listing" component={Listing} />
  </Fragment>
);

export default routes;
