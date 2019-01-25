import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { TOGGLE_MINIMIZED_SIDEBAR } from '../reducers/admin';

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
              <NavLink tag={props => <Link to="/admin" {...props} />}>
                <FontAwesomeIcon icon="tachometer-alt" className="nav-icon" /> Bảng điều khiển
              </NavLink>
              <NavLink tag={props => <Link to="/admin/web-template" {...props} />}>
                <FontAwesomeIcon icon="box-open" className="nav-icon" /> Mẫu website
              </NavLink>
              <NavLink tag={props => <Link to="/admin" {...props} />}>
                <FontAwesomeIcon icon="file-invoice" className="nav-icon" /> Đơn hàng
              </NavLink>
              <NavLink tag={props => <Link to="/admin" {...props} />}>
                <FontAwesomeIcon icon="wrench" className="nav-icon" /> Cài đặt
              </NavLink>
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
