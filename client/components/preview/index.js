import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, NavbarBrand, Button, NavItem, NavLink } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PreviewNavbarStyled } from './style';
import logo from '../../assets/images/logo-rgb.png';
import { getTemplateByUrl } from '../../actions/template';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/main.css';
import { isEmpty } from '../../../constants/utils';

library.add(faTimes);

function mapStateToProps(state) {
  return {
    template: state.template.previewTemplate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTemplateByUrl: url => dispatch(getTemplateByUrl(url)),
  };
}

class Preview extends React.Component {
  componentDidMount() {
    if (isEmpty(this.props.template)) {
      if (this.props.match.params.url) {
        this.props.getTemplateByUrl(this.props.match.params.url);
      }
    }
  }

  render() {
    const { template } = this.props;
    return (
      <div>
        <PreviewNavbarStyled>
          <Navbar dark>
            <NavbarBrand tag={props => <Link to="/" {...props} />}>
              <img
                className="navbar-brand-full"
                src={logo}
                width="89"
                height="25"
                alt="sai gon web logo"
              />
            </NavbarBrand>
            <Nav className="ml-auto">
              <NavItem>
                <Button color="success">Mua theme</Button>
              </NavItem>
              <NavLink href={`https://${template.url}`}>
                <FontAwesomeIcon icon="times" />
              </NavLink>
            </Nav>
          </Navbar>
        </PreviewNavbarStyled>

        <iframe
          style={{
            position: 'fixed',
            top: '56px',
            left: '0px',
            bottom: '0px',
            right: '0px',
            width: '100%',
            height: '100%',
            border: 'none',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            zIndex: 0,
          }}
          name="demo"
          src={`https://${template.url}`}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
