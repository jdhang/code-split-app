import React, { Component } from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const TextInput = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "TextInput" */ 'test-lib/lib/TextInput')
});

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "FLIGHTS",
      BaseWidget: null,
      FlightWidget: null,
      CarWidget: null
    };
    this.loadWidgets = this.loadWidgets.bind(this);
    this.selectTab = this.selectTab.bind(this);
  }

  componentDidMount() {
    this.loadWidgets();
  }

  loadWidgets() {
    const { tab } = this.state;
    if (tab === "FLIGHTS") {
      let promise;
      if (!this.state.BaseWidget) {
        if (!this.state.FlightWidget) {
          promise = import(/* webpackChunkName: "BaseWidget" */ './BaseWidget')
            .then(module => {
              this.setState({ BaseWidget: module.default });
              return import(/* webpackChunkName: "FlightWidget" */ './FlightWidget')
            })
        }
      } else {
        promise = import(/* webpackChunkName: "FlightWidget" */ './FlightWidget')
      }
      promise
        .then(module => {
          this.setState({
            FlightWidget: module.default(this.state.BaseWidget, TextInput)
          });
        });
    } else if (tab === "CAR") {
      let promise;
      if (!this.state.BaseWidget) {
        if (!this.state.CarWidget) {
          promise = import(/* webpackChunkName: "BaseWidget" */ './BaseWidget')
            .then(module => {
              this.setState({ BaseWidget: module.default });
              return import(/* webpackChunkName: "CarWidget" */ './CarWidget')
            })
        }
      } else {
        promise = import(/* webpackChunkName: "CarWidget" */ './CarWidget')
      }
      promise
        .then(module => {
          this.setState({
            CarWidget: module.default(this.state.BaseWidget, TextInput)
          });
        });
    }
  }

  selectTab(tab) {
    this.setState({
      tab: tab
    }, this.loadWidgets);
  }

  render() {
    const { tab, CarWidget, FlightWidget } = this.state;
    return (
      <div>
        <button onClick={() => this.selectTab("FLIGHTS")}>FLIGHTS</button>
        <button onClick={() => this.selectTab("CAR")}>CAR</button>
        {
          tab === "FLIGHTS" && FlightWidget
          ? <FlightWidget />
          : null
        }
        {
          tab === "CAR" && CarWidget
          ? <CarWidget />
          : null
        }
      </div>
    );
  }
}

export default Widget;