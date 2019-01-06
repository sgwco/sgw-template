import React from 'react';
import logo from '../../assets/images/logo-rgb.png';
import bct from '../../assets/images/dathongbao.png';
import { FooterVerifyImgStyled } from './style';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section className="footer-Content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <img src={logo} alt="logo" />
                <FooterVerifyImgStyled src={bct} alt="da thong bao bo cong thuong" />
                <ul className="footer-social">
                  <li>
                    <a className="facebook" href="#">
                      <i className="lni-facebook-filled" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="lni-twitter-filled" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="lni-linkedin-fill" />
                    </a>
                  </li>
                  <li>
                    <a className="google-plus" href="#">
                      <i className="lni-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Dịch vụ</h3>
                  <ul className="menu">
                    <li>
                      <a href="#">Thiết kế website</a>
                    </li>
                    <li>
                      <a href="#">Hosting</a>
                    </li>
                    <li>
                      <a href="#">VPS</a>
                    </li>
                    <li>
                      <a href="#">Email Domain</a>
                    </li>
                    <li>
                      <a href="#">Mobile App</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">Chính sách</h3>
                  <ul className="menu">
                    <li>
                      <a href="#">Thiết kế website</a>
                    </li>
                    <li>
                      <a href="#">Hosting</a>
                    </li>
                    <li>
                      <a href="#">VPS</a>
                    </li>
                    <li>
                      <a href="#">Email Domain</a>
                    </li>
                    <li>
                      <a href="#">Mobile App</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <div className="widget">
                  <h3 className="block-title">CTY TNHH MTV Sài Gòn Web</h3>
                  <ul className="contact-footer">
                    <li>
                      <strong>Address :</strong>{' '}
                      <span>1900 Pico Blvd, New York br Centernial, colorado</span>
                    </li>
                    <li>
                      <strong>Phone :</strong> <span>+48 123 456 789</span>
                    </li>
                    <li>
                      <strong>E-mail :</strong>{' '}
                      <span>
                        <a href="#">info@example.com</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-info float-left">
                  <p>
                    Crafted by{' '}
                    <a href="http://uideck.com" rel="nofollow">
                      UIdeck
                    </a>
                  </p>
                </div>
                <div className="float-right">
                  <ul className="nav nav-inline">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        About Prime
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        TOS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Return Policy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
