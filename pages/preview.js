import React from 'react';
import Link from 'next/link';
import { Navbar, Nav, NavbarBrand, Button, NavItem, NavLink } from 'reactstrap';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTimes);

export default class Preview extends React.Component {
  static getInitialProps({ req, res, query }) {
    if (req) {
      if (query.url) {
        return { url: query.url };
      } else {
        return res.redirect('/');
      }
    }
    return { ...query };
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="author" content="Vo Hoai Son" />

          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <title>SGW - Xem trước mẫu website</title>
        </Head>
        <div className="navbar-preview">
          <Navbar dark>
            <Link href="/">
              <NavbarBrand href="/">
                <img
                  className="navbar-brand-full"
                  src="/static/images/logo-rgb.png"
                  width="89"
                  height="25"
                  alt="sai gon web logo"
                />
              </NavbarBrand>
            </Link>
            <Nav className="ml-auto">
              <NavItem>
                <Button color="success">Mua theme</Button>
              </NavItem>
              <NavLink href={`https://${this.props.url}`}>
                <FontAwesomeIcon icon="times" />
              </NavLink>
            </Nav>
          </Navbar>
        </div>

        <iframe className="iframe" name="demo" src={`https://${this.props.url}`} />
        <style jsx>{`
          .navbar-preview {
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
            z-index: 9999;
            position: relative;
          }
          .iframe {
            position: fixed;
            top: 56px;
            left: 0px;
            bottom: 0px;
            right: 0px;
            width: 100%;
            height: 100%;
            border: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            z-index: 0;
          }
        `}</style>
      </div>
    );
  }
}
