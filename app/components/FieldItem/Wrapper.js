import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 0 ${props => props.prsVal}%;
  margin: 5px;
  background-color: blue;
`;

export default Wrapper;
