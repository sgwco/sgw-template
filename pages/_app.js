import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import App, { Container } from 'next/app';
import Progress from 'components/progress';
import makeStore from 'store';
// import { Loader } from 'components/loader';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  createUrl = router => {
    // This is to make sure we don't references the router object at call time
    const { pathname, asPath, query } = router;
    return {
      get query() {
        return query;
      },
      get pathname() {
        return pathname;
      },
      get asPath() {
        return asPath;
      },
      back: () => {
        router.back();
      },
      push: (url, as) => router.push(url, as),
      pushTo: (href, as) => {
        const pushRoute = as ? href : null;
        const pushUrl = as || href;

        return router.push(pushRoute, pushUrl);
      },
      replace: (url, as) => router.replace(url, as),
      replaceTo: (href, as) => {
        const replaceRoute = as ? href : null;
        const replaceUrl = as || href;

        return router.replace(replaceRoute, replaceUrl);
      },
    };
  };

  render() {
    const { Component, pageProps, router, store } = this.props;
    const url = this.createUrl(router);
    return (
      <Container>
        <Provider store={store}>
          <PersistGate persistor={store.__persistor}>
            <Progress />
            <Component {...pageProps} url={url} />
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(withReduxSaga(MyApp));
