import React from 'react';

const createCarWidget = (BaseWidget, TextInput) => {
  class _CarWidget extends BaseWidget {
    render() {
      return (
        <div>
          <h3>Car Widget</h3>
          <fieldset>
            <TextInput type="text" value="" onChange={() => {}} placeholder="Pick up" />
          </fieldset> 
          <fieldset>
            <TextInput type="text" value="" onChange={() => {}} placeholder="Drop off" />
          </fieldset> 
          <fieldset>
            <TextInput type="text" value="" onChange={() => {}} placeholder="Pick up time" />
          </fieldset> 
          <fieldset>
            <TextInput type="text" value="" onChange={() => {}} placeholder="Drop off time" />
          </fieldset> 
          <button>Search</button>
        </div>
      );
    }
  }

  return _CarWidget;
}

export default createCarWidget;