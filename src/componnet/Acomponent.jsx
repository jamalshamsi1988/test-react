import  { useState } from 'react'
import StyledComponents from './StyledComponents'

const Acomponent = ({number,setNumber}) => {
  return (
    <StyledComponents>
      <h3>Componet A</h3>
      <p>Number: {number}</p>
      <button onClick={()=>setNumber(number => number+1)}>+</button>
    </StyledComponents>
  )
}

export default Acomponent
