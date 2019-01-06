import React from 'react';
import Swiper from 'swiper';
import { ClientSlideStyled, ClientSlideImgStyled } from './style';

export default class ClientsMainPage extends React.Component {
  componentDidMount() {
    new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }

  render() {
    return (
      <section className="section" id="doi-tac">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Đối tác</h2>
          </div>
          <div id="clients-scroller" className="swiper-container">
            <div className="swiper-wrapper">
              <ClientSlideStyled>
                <ClientSlideImgStyled src="static/images/clients/white-palace.png" alt="" />
              </ClientSlideStyled>
              <ClientSlideStyled>
                <ClientSlideImgStyled src="static/images/clients/atoz-travel.png" alt="" />
              </ClientSlideStyled>
              <ClientSlideStyled>
                <ClientSlideImgStyled src="static/images/clients/tba.png" alt="" />
              </ClientSlideStyled>
              <ClientSlideStyled>
                <ClientSlideImgStyled src="static/images/clients/thiekebzc.png" alt="" />
              </ClientSlideStyled>
              <ClientSlideStyled>
                <ClientSlideImgStyled src="static/images/clients/saigonlaps.png" alt="" />
              </ClientSlideStyled>
              <ClientSlideStyled>
                <ClientSlideImgStyled src="static/images/clients/keo-ab.png" alt="" />
              </ClientSlideStyled>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
