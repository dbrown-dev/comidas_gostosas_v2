import styled from 'styled-components';

import { getSpacing } from './theme';

const Card = styled.div`
  width: 310px;
  border-radius: 0.5rem;
  margin-bottom: ${getSpacing(5)};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Card;
