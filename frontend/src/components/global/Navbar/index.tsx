// Packages:
import React from "react";

// Imports:
import LOGO from "../../../assets/icon.png";

// Constants:
import { ROUTES } from "../../../routes";

// Styles:
import { Wrapper, Container, CustomLink, Icon } from "./styles";

// Functions:
const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <CustomLink to={ROUTES.INDEX}>
          <Icon src={LOGO} />
        </CustomLink>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
