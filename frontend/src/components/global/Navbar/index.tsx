// Packages:
import React from "react";
import { connect } from "react-redux";

// Typescript:
import { InitialState } from "../../../reducers/ts/interfaces";
import { NavbarPropsInterface } from "./ts/interfaces";

// Imports:
import LOGO from "../../../assets/icon.png";

// Constants:
import { ROUTES } from "../../../routes";

// Styles:
import { Wrapper, Container, CustomLink, Icon } from "./styles";

// Redux:
const mapStateToProps = (state: InitialState) => {
  return {
    theme: state.global.theme,
  };
};

// Functions:
const Navbar = (props: NavbarPropsInterface) => {
  return (
    <Wrapper theme={props.theme}>
      <Container>
        <CustomLink to={ROUTES.INDEX}>
          <Icon src={LOGO} />
        </CustomLink>
      </Container>
    </Wrapper>
  );
};

export default connect(mapStateToProps, null)(Navbar);
