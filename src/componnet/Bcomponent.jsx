import React from 'react'
import StyledComponents from './StyledComponents';

const Bcomponent = ({ text, number }) => {
  return (
    <StyledComponents>
      <h3>Componet B</h3>
      <p>Number: {number}</p>
      
      {text}
    </StyledComponents>
  );
};

export default Bcomponent
