import styled from 'styled-components';

import { getColor, getFont, getSpacing } from './theme';

const CardContent = styled.p`
  font-family: ${getFont('primary')};
  font-size: ${getFont('base')};
  color: ${getColor('primary')};
  margin: ${getSpacing(3)};
`;

export default CardContent;
