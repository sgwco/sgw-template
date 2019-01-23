import React from 'react';
import WOW from 'wow.js';
import { connect } from 'react-redux';
import MainSearch from './main-search';
import ServiceMainPage from './services';
import WebTemplates from './web-templates/web-templates';
import ClientsMainPage from './clients';
import { hideLoader } from '../../actions/common';
import Header from '../header';
import Footer from '../footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faCog,
  faMobile,
  faChartLine,
  faLayerGroup,
  faSmile,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faCog, faMobile, faChartLine, faLayerGroup, faSmile, faLock);

import '../../assets/css/bootstrap.min.css';
import '../../assets/css/swiper.min.css';
import '../../assets/css/animate.css';
import '../../assets/css/main.css';

function mapDispatchToProps(dispatch) {
  return {
    hideLoader: () => dispatch(hideLoader()),
  };
}

class HomePage extends React.Component {
  componentDidMount() {
    new WOW().init();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <MainSearch />
        <ServiceMainPage />
        <WebTemplates />
        <ClientsMainPage />
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
