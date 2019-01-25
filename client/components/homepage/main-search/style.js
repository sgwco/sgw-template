import styled from 'styled-components';

export const SearchWrapperStyled = styled.div`
  position: relative;
`;

export const SearchWrapperBackground = styled.img`
  height: 650px;
`;

export const SearchTextWrapperStyled = styled.div`
  position: absolute;
  top: 280px;
  left: 10%;
  right: 10%;
  @media (min-width: 768px) and (max-width: 1024px) {
    top: 240px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    top: 200px;
  }
  @media (max-width: 481px) {
    top: 180px;
  }
`;

export const SearchMainTextStyled = styled.h2`
  font-weight: 800;
  font-size: 40px;
  color: white;
  @media (max-width: 481px) {
    font-size: 30px;
  }
`;

export const SearchSecondaryTextStyled = styled.h4`
  font-weight: 300;
  font-size: 18px;
  line-height: 35px;
  color: white;
  margin: 10px 10%;
  @media (max-width: 481px) {
    font-size: 14px;
    line-height: 25px;
  }
`;

export const SearchBoxGroupStyled = styled.div`
  width: 60% !important;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

export const SearchBoxStyled = styled.input`
  padding: 23px 30px !important;
  border-radius: 30px !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
`;

export const SearchBoxBtnStyled = styled.button`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
