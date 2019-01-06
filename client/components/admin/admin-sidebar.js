import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { TOGGLE_MINIMIZED_SIDEBAR } from '../../reducers/admin';

function mapDispatchToProps(dispatch) {
  return {
    toggleMinimizedSidebar: () => dispatch({ type: TOGGLE_MINIMIZED_SIDEBAR }),
  };
}

class AdminSidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <Nav>
            <NavItem>
              <Link href="/admin">
                <NavLink href="/admin">
                  <FontAwesomeIcon icon="tachometer-alt" className="nav-icon" /> Bảng điều khiển
                </NavLink>
              </Link>
              <Link href="/admin/web-template">
                <NavLink href="/admin/web-template">
                  <FontAwesomeIcon icon="box-open" className="nav-icon" /> Mẫu website
                </NavLink>
              </Link>
              <Link href="/admin">
                <NavLink href="/admin">
                  <FontAwesomeIcon icon="file-invoice" className="nav-icon" /> Đơn hàng
                </NavLink>
              </Link>
              <Link href="/admin">
                <NavLink href="/admin/web-template">
                  <FontAwesomeIcon icon="wrench" className="nav-icon" /> Cài đặt
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </nav>
        <button
          className="sidebar-minimizer brand-minimizer"
          type="button"
          onClick={this.props.toggleMinimizedSidebar}
        />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AdminSidebar);
