import styled from 'styled-components';

import { getColor, getFont, getSpacing } from './theme';

const AppTitle = styled.h1`
  font-family: ${getFont('primary')};
  font-size: ${getFont('xLarge')};
  color: ${getColor('secondary')};
  margin-left: ${getSpacing(3)};
`;

export default AppTitle;
