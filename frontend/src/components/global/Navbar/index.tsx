// Packages:
import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

// Typescript:
import { InitialState } from "../../../reducers/ts/interfaces";
import { NavbarPropsInterface } from "./ts/interfaces";

// Imports:
import LOGO from "../../../assets/icon.png";
import { LIGHT_BULB } from "../../../constants/icons";

// Constants:
import { ROUTES } from "../../../routes";

// Styles:
import {
  Wrapper,
  Container,
  CustomLink,
  Icon,
  LeftContainer,
  LightBulb,
} from "./styles";

// Redux:
import { toggleTheme } from "../../../actions";

const mapStateToProps = (state: InitialState) => {
  return {
    theme: state.global.theme,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleTheme: (newTheme: "DARK" | "LIGHT") =>
      dispatch(toggleTheme(newTheme)),
  };
};

// Functions:
const Navbar = (props: NavbarPropsInterface) => {
  return (
    <Wrapper theme={props.theme}>
      <LeftContainer>
        <LightBulb
          src={LIGHT_BULB}
          theme={props.theme}
          onClick={() =>
            props.toggleTheme(props.theme === "DARK" ? "LIGHT" : "DARK")
          }
        />
      </LeftContainer>
      <Container>
        <CustomLink to={ROUTES.INDEX}>
          <Icon src={LOGO} />
        </CustomLink>
      </Container>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
