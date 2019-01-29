import React from 'react';
import MainSearch from './main-search';
import ServiceMainPage from './services';
import WebTemplates from './web-templates/web-templates';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
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
import bootstrapCss from '../../assets/css/bootstrap.min.css';
import mainCss from '../../assets/css/main.css';

library.add(faSearch, faCog, faMobile, faChartLine, faLayerGroup, faSmile, faLock);

class HomePage extends React.Component {
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

export default withStyles(bootstrapCss, mainCss)(HomePage);
