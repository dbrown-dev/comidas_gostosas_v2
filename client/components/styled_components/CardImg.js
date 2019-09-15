import styled from 'styled-components';

const CardImg = styled.div`
  background-size: cover;
  background-position: center;
  height: 180px;
  background-image: url(${({ src }) => src});
`;

export default CardImg;
