import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header id="slider-area">
        <nav className="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
          <div className="container">
            <a className="navbar-brand" href="/">
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
                  <a className="nav-link page-scroll" href="#dich-vu">
                    Dịch vụ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#kho-giao-dien">
                    Kho giao diện
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#doi-tac">
                    Đối tác
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
