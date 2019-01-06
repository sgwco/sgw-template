import React from 'react';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faLock);

export default class AdminLoginLayout extends React.Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="author" content="Vo Hoai Son" />

          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/css/admin-css.css" />
          <title>Đăng nhập SGW Admin</title>
        </Head>
        {this.props.children}
      </div>
    );
  }
}
