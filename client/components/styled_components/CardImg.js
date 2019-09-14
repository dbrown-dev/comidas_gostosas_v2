import styled from 'styled-components';
import { getSpacing } from './theme';

const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 140px;
  margin: ${getSpacing(0)};
`;

export default CardImg;
