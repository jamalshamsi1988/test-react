import { useState } from "react";
import Acomponent from "./Acomponent";
import Bcomponent from "./Bcomponent";
import Button from "./Button";
import StyledComponents from "./StyledComponents";

const Parent = () => {
  const [number, setNumber] = useState(0);

  const changeHandler = () => {
    setNumber((number) => number + 1);
  };

  return (
    <StyledComponents>
      <h1>Parent Component </h1>
      <Acomponent number={number} setNumber={setNumber} />

      <Bcomponent
        number={number}
        text={<Button changeHandler={changeHandler} />}
      />
    </StyledComponents>
  );
};

export default Parent;
