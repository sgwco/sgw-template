import React from 'react';
import Swiper from 'swiper';

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
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Đối tác</h2>
          </div>
          <div id="clients-scroller" className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="static/images/clients/white-palace.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="static/images/clients/atoz-travel.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="static/images/clients/tba.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="static/images/clients/thiekebzc.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="static/images/clients/saigonlaps.png" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="static/images/clients/keo-ab.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          img {
            width: 100%;
          }
        `}</style>
      </section>
    );
  }
}
