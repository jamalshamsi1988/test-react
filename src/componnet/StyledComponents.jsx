import React from 'react'

const StyledComponents = ({children}) => {
   

    const styleCss = {
      border: "2px solid white",
      padding: "10px",
      margin: "20px",
    };

  return (
    <div style={styleCss}>

      {children}
      
    </div>
  )
}

export default StyledComponents
