import styled from 'styled-components';

export const AdminTemplateThumbnail = styled.img`
  width: 100%;
`;

export const AdminRowInProgress = styled.tr`
  ${props => props.loading && 'opacity: 0.2;pointer-events: none;'};
`;
