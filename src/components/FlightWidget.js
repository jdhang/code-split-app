import React from 'react';

const createFlightWidget = (BaseWidget, TextInput) => {
  class _FlightWidget extends BaseWidget {
    render() {
      return (
        <div>
          <h3>Flight Widget</h3>
          <fieldset>
            <TextInput type="text" value="" onChange={() => {}} placeholder="From" />
          </fieldset> 
          <fieldset>
            <TextInput type="text" value="" onChange={() => {}} placeholder="To" />
          </fieldset> 
          <fieldset>
            <TextInput type="text" value="" onChange={() => {}} placeholder="Depart" />
          </fieldset> 
          <fieldset>
            <TextInput type="text" value="" onChange={() => {}} placeholder="Arrive" />
          </fieldset> 
          <button>Search</button>
        </div>
      );
    }
  }

  return _FlightWidget;
};

export default createFlightWidget;