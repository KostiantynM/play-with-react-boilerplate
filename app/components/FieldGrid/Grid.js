import styled from 'styled-components';

// this styled div sets styling to each Album
const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${props => props.size * 5}em;
  height: ${props => props.size * 5}em;
`;

export default StyledGrid;
