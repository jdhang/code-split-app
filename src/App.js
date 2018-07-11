import React, { Component } from 'react';
import Loadable from 'react-loadable';
// import Header from './components/Header';
// import Widget from './components/Widget';
// import RecentSearchSection from './components/RecentSearchSection';
// import GeoDeals from './components/GeoDeals';
// import Footer from './components/Footer';

const Loading = () => <div>Loading...</div>;

const Header = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "Header" */ './components/Header')
});

const Navigation = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "Navigation" */ './components/Navigation')
});

const Widget = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "Widget" */ './components/Widget')
});

const RecentSearchSection = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "RecentSearchSection" */ './components/RecentSearchSection')
});

const GeoDeals = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "GeoDeals" */ './components/GeoDeals')
});

const Footer = Loadable({
  loading: Loading,
  loader: () => import(/* webpackChunkName: "Footer" */ './components/Footer')
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWidget: false
    };
    this.toggleWidget = this.toggleWidget.bind(this);
  }

  toggleWidget() {
    this.setState({ showWidget: !this.state.showWidget });
  }

  render() {
    const { showWidget } = this.state;
    return (
      <div>
        <Header text="Home" />
        <Navigation />
        {
          showWidget
          ? <Widget />
          : null
        }
        <button onClick={this.toggleWidget}>Toggle Widget</button>
        <RecentSearchSection />
        <GeoDeals />
        <Footer />
      </div>
    );
  }
}

export default App;