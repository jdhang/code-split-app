import React, { Component } from 'react';

class BaseWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWidget: true
    }
  }
}

export default BaseWidget;