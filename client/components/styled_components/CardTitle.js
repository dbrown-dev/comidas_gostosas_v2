import styled from 'styled-components';

import { getColor, getFont, getSpacing } from './theme';

const CardTitle = styled.h3`
  font-family: ${getFont('primary')};
  font-size: ${getFont('medium')};
  color: ${getColor('primary')};
  margin: ${getSpacing(3)};
  line-height: 1.9rem;
  height: 3.8rem;
`;

export default CardTitle;
