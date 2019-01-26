import React from 'react';
import { Container } from 'reactstrap';
import { ClientSlideImgStyled } from './style';
import { SectionStyled, SectionHeaderStyled, SectionTitleStyled } from '../../style';

export default class ClientsMainPage extends React.Component {
  render() {
    return (
      <SectionStyled id="doi-tac">
        <Container>
          <SectionHeaderStyled>
            <SectionTitleStyled>Đối tác</SectionTitleStyled>
          </SectionHeaderStyled>
          <div className="d-flex justify-content-between flex-row flex-wrap">
            <ClientSlideImgStyled
              src="/static/images/clients/white-palace.png"
              alt="white palace"
            />
            <ClientSlideImgStyled src="/static/images/clients/atoz-travel.png" alt="atoz travel" />
            <ClientSlideImgStyled src="/static/images/clients/tba.png" alt="tba" />
            <ClientSlideImgStyled src="/static/images/clients/thiekebzc.png" alt="thiet ke bzc" />
            <ClientSlideImgStyled src="/static/images/clients/saigonlaps.png" alt="sai gon laps" />
            <ClientSlideImgStyled src="/static/images/clients/keo-ab.png" alt="keo ab" />
          </div>
        </Container>
      </SectionStyled>
    );
  }
}
