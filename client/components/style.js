import styled from 'styled-components';

// SECTIONS

export const SectionStyled = styled.section`
  padding: 80px 0;
`;

export const SectionHeaderStyled = styled.div`
  color: #fff;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
`;

export const SectionTitleStyled = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #263238;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    width: 80px;
    height: 2px;
    margin: 0 auto;
    left: calc(50% - 40px);
    background: #f97794;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    transition: 0.3s;
  }
`;

// ITEM BOXES

export const ItemBoxStyled = styled.div`
  padding: 30px;
  border-radius: 4px;
  border: 1px solid #eaeaea;
  margin: 15px 0;
  webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
`;

export const ItemBoxHeaderStyled = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
`;
