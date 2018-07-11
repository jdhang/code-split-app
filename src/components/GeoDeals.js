import React from 'react';

const GeoDeals = () => {
  return [0, 1, 2, 3, 4, 5].map(val => (
    <div>Deal {`#${val + 1}`}</div>
  ));
};

export default GeoDeals;