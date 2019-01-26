import React from 'react';
import MainSearch from './main-search';
import ServiceMainPage from './services';
import WebTemplates from './web-templates/web-templates';
import ClientsMainPage from './clients';
import Header from '../../commons/header';
import Footer from '../../commons/footer';
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
import '../../assets/css/main.css';

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MainSearch />
        <ServiceMainPage />
        {/* <WebTemplates /> */}
        <ClientsMainPage />
        <Footer />
      </>
    );
  }
}
