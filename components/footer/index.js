import React from 'react';
import { Container, Row } from 'reactstrap';
import {
  FooterVerifyImgStyled,
  FooterBlockTitle,
  FooterMenu,
  FooterContactMenu,
  FooterSection,
} from './style';

export default class Footer extends React.Component {
  services = [
    {
      name: 'Thiết kế Website',
      url: 'https://sgweb.vn/dich-vu/thiet-ke-website/',
    },
    {
      name: 'Hosting',
      url: 'https://sgweb.vn/dich-vu/hosting/',
    },
    {
      name: 'VPS',
      url: 'https://sgweb.vn/dich-vu/vps/',
    },
    {
      name: 'Email Domain',
      url: 'https://sgweb.vn/dich-vu/email-domain/',
    },
    {
      name: 'Mobile App',
      url: 'https://sgweb.vn/dich-vu/mobile-app/',
    },
  ];

  policies = [
    {
      name: 'Quy trình làm việc',
      url: 'https://sgweb.vn/quy-trinh-lam-viec/',
    },
    {
      name: 'Hướng dẫn thanh toán',
      url: 'https://sgweb.vn/huong-dan-thanh-toan/',
    },
    {
      name: 'Quy định sử dụng',
      url: 'https://sgweb.vn/quy-dinh-su-dung/',
    },
    {
      name: 'Chính sách riêng tư',
      url: 'https://sgweb.vn/chinh-sach-rieng-tu/',
    },
  ];

  renderServiceItem = (item, index) => {
    return (
      <li key={index}>
        <a href={item.url} aria-label={item.name}>
          {item.name}
        </a>
      </li>
    );
  };

  renderPolicyItem = (item, index) => {
    return (
      <li key={index}>
        <a href={item.url} aria-label={item.name}>
          {item.name}
        </a>
      </li>
    );
  };

  render() {
    return (
      <footer>
        <FooterSection>
          <Container>
            <Row>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <img src="/static/images/logo-rgb.png" alt="logo" />
                <a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=43667">
                  <FooterVerifyImgStyled
                    src="/static/images/dathongbao.png"
                    alt="da thong bao bo cong thuong"
                  />
                </a>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <FooterBlockTitle>Dịch vụ</FooterBlockTitle>
                <FooterMenu>{this.services.map(this.renderServiceItem)}</FooterMenu>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <FooterBlockTitle>Chính sách</FooterBlockTitle>
                <FooterMenu>{this.policies.map(this.renderPolicyItem)}</FooterMenu>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                <FooterBlockTitle>CTY TNHH MTV Sài Gòn Web</FooterBlockTitle>
                <FooterContactMenu>
                  <li>
                    <strong>Địa chỉ: </strong>
                    <span>D3/40 Ấp 4, X. Lê Minh Xuân, H. Bình Chánh, TP. Hồ Chí Minh</span>
                  </li>
                  <li>
                    <strong>VP: </strong>
                    <span>8A Đường Phổ Quang, Phường 2, Quận Tân Bình, TP. Hồ Chí Minh</span>
                  </li>
                  <li>
                    <strong>CN1: </strong>
                    <span>
                      2408, Park 2, Vinhomes Tân Cảng, 208 Nguyễn Hữu Cảnh, Phường 2, Bình Thạnh, Hồ
                      Chí Minh
                    </span>
                  </li>
                  <li>
                    <strong>CN2: </strong>
                    <span>70 Lê Thị Trung, Phú Lợi, Thủ Dầu Một, Bình Dương</span>
                  </li>
                  <li>
                    <strong>E-mail: </strong>
                    <span>
                      <a href="mailto:contact@sgweb.vn">contact@sgweb.vn</a>
                    </span>
                  </li>
                  <li>
                    <strong>Giấy chứng nhận ĐKKD: </strong>
                    <span>0314418599</span>
                  </li>
                  <li>
                    <strong>Nơi cấp: </strong>
                    <span>Sở KH &amp; ĐT TP.HCM cấp lần đầu ngày 23/05/2017</span>
                  </li>
                </FooterContactMenu>
              </div>
            </Row>
          </Container>
        </FooterSection>
      </footer>
    );
  }
}
