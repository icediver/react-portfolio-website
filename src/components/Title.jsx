import React from 'react';
import styled from 'styled-components';
const Title = ({ value }) => {
  return (
    <Div className='sideTitle'>
      <h1>{value}</h1>
    </Div>
  )
}
export default Title;

const Div = styled.div`
  position: relative;
  h1 {
    position: absolute;
    transform: translateX(-47%) translateY(16vw) rotate(-90deg);
    font-size: 7rem;
    text-transform: uppercase;
    color: var(--secondary-color);
    font-weight: 200;
  }
`;
