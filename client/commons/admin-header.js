import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { TOGGLE_SIDEBAR } from '../reducers/admin';
import logo from '../assets/images/logo-rgb.png';

function mapDispatchToProps(dispatch) {
  return {
    toggleSidebar: () => dispatch({ type: TOGGLE_SIDEBAR }),
  };
}

class AdminHeader extends React.Component {
  state = {
    userDropdownToggle: false,
  };

  onUserDropdown = () => this.setState({ userDropdownToggle: !this.state.userDropdownToggle });

  render() {
    const { userDropdownToggle } = this.state;
    return (
      <Navbar className="app-header" light>
        <NavbarBrand href="/">
          <img
            className="navbar-brand-full"
            src={logo}
            width="89"
            height="25"
            alt="sai gon web logo"
          />
          <img
            className="navbar-brand-minimized"
            src={logo}
            width="30"
            height="30"
            alt="sai gon web logo"
          />
        </NavbarBrand>
        <NavbarToggler className="sidebar-toggler" onClick={this.props.toggleSidebar} />
        <Nav navbar className="ml-auto">
          <Dropdown nav isOpen={userDropdownToggle} toggle={this.onUserDropdown}>
            <DropdownToggle nav>
              <img
                className="img-avatar"
                src="https://graph.facebook.com/100006945288953/picture?type=square"
                alt="sonvh.it6@gmail.com"
              />
            </DropdownToggle>
            <DropdownMenu right={true}>
              <DropdownItem>
                <FontAwesomeIcon icon="wrench" /> Settings
              </DropdownItem>
              <DropdownItem href="/admin/logout">
                <FontAwesomeIcon icon="lock" /> Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AdminHeader);
