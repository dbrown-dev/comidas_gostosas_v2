import styled from 'styled-components';

import { getColor, getFont, getSpacing } from './theme';

const CardTitle = styled.h3`
  font-family: ${getFont('primary')};
  font-size: ${getFont('medium')};
  color: ${getColor('primary')};
  margin: ${getSpacing(3)};
`;

export default CardTitle;
