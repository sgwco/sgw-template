import styled, { keyframes } from 'styled-components';

export const LoaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #263238;
  z-index: 9999999999;
`;

export const LoaderSpinnerStyled = styled.div`
  width: 40px;
  height: 40px;
  ${props => !props.inline && 'top: 45%;'}
  position: relative;
  margin: 0px auto;
`;

export const skBounce = keyframes`
  0%, 100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
`;

export const LoaderDoubleBouncer = styled.div`
  width: ${props => (props.inline ? '40px' : '100%')};
  height: ${props => (props.inline ? '40px' : '100%')};
  border-radius: 50%;
  background-color: #f97794;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: ${skBounce} 2s infinite ease-in-out;
  animation: ${skBounce} 2s infinite ease-in-out;
`;

export const LoaderDoubleBouncer2 = styled(LoaderDoubleBouncer)`
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
`;
