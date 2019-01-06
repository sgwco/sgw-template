import React from 'react';
import WOW from 'wow.js';
import { connect } from 'react-redux';
import MainSearch from './main-search';
import ServiceMainPage from './services';
import WebTemplates from './web-templates/web-templates';
import ClientsMainPage from './clients';
import { hideLoader } from '../../actions/common';
import { Loader } from '../loader';
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
import '../../assets/css/color-switcher.css';
import '../../assets/css/main.css';

function mapDispatchToProps(dispatch) {
  return {
    hideLoader: () => dispatch(hideLoader()),
  };
}

class HomePage extends React.Component {
  componentDidMount() {
    this.props.hideLoader();
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
        <Loader />
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
