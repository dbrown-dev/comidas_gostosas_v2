import styled from 'styled-components';

import { getColor, getFont, getSpacing, getFontWeight } from './theme';

const CardContent = styled.p`
  font-family: ${getFont('primary')};
  font-size: ${getFont('small')};
  color: ${getColor('primary')};
  margin: ${getSpacing(1, 3)};
  font-weight: ${getFontWeight('regular')};
`;

export default CardContent;
