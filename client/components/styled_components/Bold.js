import styled from 'styled-components';

import { getFontWeight } from './theme';

const Bold = styled.span`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  font-weight: ${getFontWeight('bold')};
`;

export default Bold;
