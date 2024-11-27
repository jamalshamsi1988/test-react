import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increaseHandler = () => setNumber((number) => number + 1);
;
  const increaseHndler3 = () => {
    // setNumber(number+1)
    // setNumber(number+1)
    // setNumber(number+1)
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
  };

  const stopHndler=()=>{
  setNumber("-")
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>{number}</p>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={increaseHndler3}>Increase3</button>
      <button onClick={stopHndler}>stop</button>
    </div>
  );
};

export default Counter;
