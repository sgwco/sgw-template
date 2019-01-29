import styled from 'styled-components';

export const FooterSection = styled.section`
  background-color: #ffffff;
  padding: 60px 0;
  color: #546e7a;
`;

export const FooterVerifyImgStyled = styled.img`
  width: 50%;
  margin: 15px 0;
`;

export const FooterMenu = styled.ul`
  padding-left: 0;

  li {
    padding-bottom: 12px;
    a {
      color: #546e7a;
      &:hover {
        color: #ad1a1a;
      }
    }
  }
`;

export const FooterContactMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;

  li {
    margin-bottom: 5px;
    a {
      color: #546e7a;
      &:hover {
        color: #ad1a1a;
      }
    }
  }
`;

export const FooterBlockTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #263238;
  margin-bottom: 30px;
  text-transform: uppercase;
  position: relative;
`;
