import { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: ${(props) => (props.change ? "red" : "blue")};
  &:hover {
    border: 1px solid black;
  }
  @media (max-width: 1200px) {
    background-color: black;
  }
`;

const Header = () => {
  const [change, setChange] = useState(false);
  return (
    <section>
      <h1>Header</h1>
      <Section change={change}>HI</Section>
      <button onClick={() => setChange((e) => !e)}>Change color</button>
    </section>
  );
};

export default Header;
