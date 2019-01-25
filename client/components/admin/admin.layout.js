import React from 'react';
import { ToastContainer } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faWrench,
  faLock,
  faTachometerAlt,
  faBoxOpen,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import AdminHeader from '../../commons/admin-header';
import AdminBreadcrumb from './admin-breadcrumb';
import AdminSidebar from '../../commons/admin-sidebar';
import '../../assets/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/admin-css.css';

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
        <AdminHeader />
        <div className="app-body">
          <AdminSidebar />
          <main className="main">
            <AdminBreadcrumb />
            {this.props.children}
          </main>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(AdminLayout);
