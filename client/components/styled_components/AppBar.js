import styled from 'styled-components';

import { getColor } from './theme';

const AppBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 70px;
  background-color: ${getColor('primary')};
  box-shadow: 2px 2px 32px 0 rgba(0, 0, 0, 0.5);
`;

export default AppBar;
