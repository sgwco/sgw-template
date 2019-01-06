import styled from 'styled-components';

export const PortfolioItemStyled = styled.div`
  padding: 10px 0;
`;

export const TemplateShotPreviewStyled = styled.div`
  width: 100%;
  height: 300px;
  background: url(${props => props.url});
  background-size: cover;
  background-position: top;
  border: 1px solid rgba(0, 0, 0, 0.4);
  -webkit-transition-duration: 4000ms;
  -o-transition-duration: 4000ms;
  transition-duration: 4000ms;
`;

export const TemplateShotItemStyled = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  &:hover ${TemplateShotPreviewStyled} {
    background-position: bottom;
  }
  &:hover ${TemplateSingleContentStyled} {
    opacity: 1;
  }
`;

export const TemplateSingleContentStyled = styled.div`
  background-color: rgba(22, 26, 39, 0.7);
  opacity: 0.9;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  -webkit-transition-duration: 500ms;
  -o-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 100%;
`;

export const TemplateFancyTableStyled = styled.div`
  display: table;
  height: 100%;
  left: 0;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const TemplateFancyTableItemStyled = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;
