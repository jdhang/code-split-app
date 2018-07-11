import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const TextInput = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "TextInput" */ 'test-lib/lib/TextInput')
});

const Footer = () => (
  <footer>
    <h3>Footer</h3>
    <div>Sign Up!</div>
    <TextInput type="text" placeholder="Please enter your email" />
    <div>&copy; 2018</div>
  </footer>
);

export default Footer;