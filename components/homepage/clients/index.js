import React from 'react';
import { Container } from 'reactstrap';
import { ClientSlideImgStyled } from './style';
import { SectionStyled, SectionHeaderStyled, SectionTitleStyled } from '../../style';

export default class ClientsMainPage extends React.Component {
  clients = [
    {
      name: 'White Palace',
      fileName: 'white-palace',
    },
    {
      name: 'AtoZ Travel',
      fileName: 'atoz-travel',
    },
    {
      name: 'TBA',
      fileName: 'tba',
    },
    {
      name: 'Thiet ke BZC',
      fileName: 'thiekebzc',
    },
    {
      name: 'Sai Gon Laps',
      fileName: 'saigonlaps',
    },
    {
      name: 'Keo AB',
      fileName: 'keo-ab',
    },
  ];

  renderClientItem = (item, index) => {
    return (
      <ClientSlideImgStyled
        key={index}
        path={`/static/images/clients/${item.fileName}.png`}
        webpPath={`/static/images/clients/${item.fileName}.webp`}
        lazyloadHeight={60}
        alt={item.name}
      />
    );
  };

  render() {
    return (
      <SectionStyled id="doi-tac">
        <Container>
          <SectionHeaderStyled>
            <SectionTitleStyled>Đối tác</SectionTitleStyled>
          </SectionHeaderStyled>
          <div className="d-flex justify-content-between flex-row flex-wrap">
            {this.clients.map(this.renderClientItem)}
          </div>
        </Container>
      </SectionStyled>
    );
  }
}
