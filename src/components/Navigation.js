import React from 'react';
import { Link } from 'react-router-dom';

const liStyle = {
  display: "inline-block",
  paddingRight: "10px",
  paddingBottom: "10px",
}
const Navigation = () => (
  <ul style={{padding: 0, margin: 0, listStyle: "none"}}>
    <li style={liStyle}><Link to="/">Home</Link></li>
    <li style={liStyle}><Link to="/listing">Listing</Link></li>
  </ul>
);

export default Navigation