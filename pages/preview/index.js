import React from 'react';
import { Link } from 'routes';
import { bindActionCreators } from 'redux';
import Head from 'next/head';
import { connect } from 'react-redux';
import { Navbar, Nav, NavbarBrand, Button, NavItem, NavLink } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PreviewNavbarStyled } from './style';
import { getTemplateByUrl } from 'store/template/action';

library.add(faTimes);

function mapStateToProps(state) {
  return {
    template: state.template.previewTemplate,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({ getTemplateByUrl }, dispatch);

class Preview extends React.Component {
  static getInitialProps({ query }) {
    const { id } = query;
    return { id };
  }

  componentDidMount() {
    this.props.getTemplateByUrl(this.props.id);
  }

  render() {
    const { template } = this.props;
    return (
      <div>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/main.css" />
        </Head>
        <PreviewNavbarStyled>
          <Navbar dark>
            <NavbarBrand tag={({ className, ...props }) => <Link route="/" {...props} />}>
              <img
                className="navbar-brand-full"
                src="/static/images/logo-rgb.png"
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
