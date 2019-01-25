import React from 'react';
import Swiper from 'swiper';
import { Container } from 'reactstrap';
import { ClientSlideStyled, ClientSlideImgStyled } from './style';
import { SectionStyled, SectionHeaderStyled, SectionTitleStyled } from '../../style';

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
      <SectionStyled id="doi-tac">
        <Container>
          <SectionHeaderStyled>
            <SectionTitleStyled>Đối tác</SectionTitleStyled>
          </SectionHeaderStyled>
          <div id="clients-scroller" className="swiper-container">
            <div className="swiper-wrapper">
              <ClientSlideStyled>
                <ClientSlideImgStyled src="/static/images/clients/white-palace.png" alt="" />
              </ClientSlideStyled>
              <ClientSlideStyled>
                <ClientSlideImgStyled src="/static/images/clients/atoz-travel.png" alt="" />
              </ClientSlideStyled>
              <ClientSlideStyled>
                <ClientSlideImgStyled src="/static/images/clients/tba.png" alt="" />
              </ClientSlideStyled>
              <ClientSlideStyled>
                <ClientSlideImgStyled src="/static/images/clients/thiekebzc.png" alt="" />
              </ClientSlideStyled>
              <ClientSlideStyled>
                <ClientSlideImgStyled src="/static/images/clients/saigonlaps.png" alt="" />
              </ClientSlideStyled>
              <ClientSlideStyled>
                <ClientSlideImgStyled src="/static/images/clients/keo-ab.png" alt="" />
              </ClientSlideStyled>
            </div>
          </div>
        </Container>
      </SectionStyled>
    );
  }
}
