import styled, { keyframes } from 'styled-components';

export const PortfolioItemStyled = styled.div`
  padding: 10px 0;
`;

export const TemplateShotPreviewStyled = styled.img`
  width: 100%;
`;

export const TemplateSingleContentStyled = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
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

const hoverImageScroll = keyframes`
  100% {
    transform: translateY(calc(-100% + 300px));
  }
`;

export const TemplateShotItemStyled = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.4);
  position: relative;
  &:hover ${TemplateShotPreviewStyled} {
    animation: ${hoverImageScroll} 2s ease-in-out;
    animation-fill-mode: forwards;
  }
  &:hover ${TemplateSingleContentStyled} {
    opacity: 1;
  }
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
