import React from 'react';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faWrench,
  faLock,
  faTachometerAlt,
  faBoxOpen,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import AdminHeader from '../admin/admin-header';
import AdminBreadcrumb from '../admin/admin-breadcrumb';
import AdminSidebar from '../admin/admin-sidebar';

library.add(faWrench, faLock, faTachometerAlt, faBoxOpen, faFileInvoice);

function mapStateToProps(state) {
  return {
    sidebarIsShown: state.admin.sidebarIsShown,
    sidebarIsMinimized: state.admin.sidebarIsMinimized,
  };
}

class AdminLayout extends React.Component {
  render() {
    const { sidebarIsShown, sidebarIsMinimized } = this.props;
    return (
      <div
        className={`app header-fixed sidebar-fixed aside-menu-fixed ${sidebarIsShown &&
          'sidebar-lg-show'} ${sidebarIsMinimized && 'brand-minimized sidebar-minimized'}`}
      >
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="author" content="Vo Hoai Son" />

          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/css/admin-css.css" />
          <title>SGW Admin</title>
        </Head>
        <AdminHeader />
        <div className="app-body">
          <AdminSidebar />
          <main className="main">
            <AdminBreadcrumb />
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(AdminLayout);
