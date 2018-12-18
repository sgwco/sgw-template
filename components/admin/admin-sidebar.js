import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
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
              <NavLink href="#">
                <FontAwesomeIcon icon="tachometer-alt" className="nav-icon" /> Dashboard
              </NavLink>
              <NavLink href="#">
                <FontAwesomeIcon icon="box-open" className="nav-icon" /> Web Template
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
