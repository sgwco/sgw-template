import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import { Router } from 'routes';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class Progress extends React.Component {
  render() {
    return (
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
      </Head>
    );
  }
}
