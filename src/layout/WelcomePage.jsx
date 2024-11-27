import React from "react";
import MessageUser from "./MessageUser";

//component composition

const WelcomPage = ({children}) => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure omnis
        minima recusandae facere reprehenderit eveniet nobis hic maiores
      
      </p>
      {/* <MessageUser userName={userName} /> */}
     {children}
    </div>
  );
};

export default WelcomPage;
