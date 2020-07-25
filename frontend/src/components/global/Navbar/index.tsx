// Packages:
import React from "react";
import styled from "styled-components";

// Imports:
import LOGO from "../../../assets/icon.png";

// Styles:
const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 101;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: 9vh;
  background: rgb(255 255 255 / 0.8);
  border-bottom: 1px #dfe6e9 solid;
  backdrop-filter: saturate(180%) blur(5px);
  transition: box-shadow 0.1s ease 0s;
`;

const Container = styled.div`
  @media (min-width: 951px) {
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 951px) {
    align-items: center;
  }
`;

const Icon = styled.img`
  width: 2.5em;
`;

// Functions:
const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Icon src={LOGO} />
      </Container>
    </Wrapper>
  );
};

export default Navbar;
