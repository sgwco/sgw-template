import styled from 'styled-components';
import { ItemBoxStyled } from '../../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ServiceItemStyled = styled(ItemBoxStyled)`
  padding: 30px 15px;
  background: #fff;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 10px 50px 0px rgba(84, 110, 122, 0.35);
  }
`;

export const ServiceItemIconStyled = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 50%;
  margin-bottom: 20px;
  background-color: ${props => {
    switch (props.color) {
      case 1:
        return '#FAE3E3';
      case 2:
        return '#E6F8ED';
      case 3:
        return '#E3EAFA';
      case 4:
        return '#F3EAD6';
      case 5:
        return '#E7E6FF';
      case 6:
        return '#DEDEDE';
      default:
        return 'none';
    }
  }};
`;

export const ServiceItemIconSVGStyled = styled(FontAwesomeIcon)`
  height: 100%;
  line-height: 60px;
  font-size: 24px;
  text-align: center;
  color: ${props => {
    switch (props.color) {
      case 1:
        return '#D82928';
      case 2:
        return '#57D283';
      case 3:
        return '#457BF4';
      case 4:
        return '#f1a90a';
      case 5:
        return '#7271FF';
      case 6:
        return '#35393D';
      default:
        return 'black';
    }
  }};
`;
