import React, { Component } from 'react';
import Head from 'next/head';
import Header from 'components/header';
import MainSearch from 'components/homepage/main-search';
import ServiceMainPage from 'components/homepage/services';
import ClientsMainPage from 'components/homepage/clients';
import WebTemplates from 'components/homepage/web-templates';
import Footer from 'components/footer';
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

class HomePage extends Component {
  render() {
    return (
      <>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/main.css" />
        </Head>
        <Header />
        <MainSearch />
        <ServiceMainPage />
        <WebTemplates />
        <ClientsMainPage />
        <Footer />
      </>
    );
  }
}
export default HomePage;
