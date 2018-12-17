import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header id="slider-area">
        <nav className="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="/static/images/logo-rgb.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="lni-menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#slider-area">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#portfolios">
                    Works
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#subscribe">
                    Subscribe
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
