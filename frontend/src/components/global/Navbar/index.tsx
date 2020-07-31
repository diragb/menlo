// Packages:
import React from "react";
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
import { Wrapper, Container, CustomLink, Icon } from "./styles";
import styled from "styled-components";

const RightContainer = styled.div`
  position: absolute;
  right: 5vw;
  display: flex;
  align-items: center;
  height: 100%;
`;

const LightBulb = styled.img`
  width: 1.5em;
  filter: invert(1);
`;

// Redux:
// import {
//   toggleTheme
// } from "../../../actions";
// import { Dispatch } from "redux";

const mapStateToProps = (state: InitialState) => {
  return {
    theme: state.global.theme,
  };
};

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     toggleTheme: (newTheme) => dispatch(toggleTheme(newTheme))
//   };
// }

// Functions:
const Navbar = (props: NavbarPropsInterface) => {
  return (
    <Wrapper theme={props.theme}>
      <Container>
        <CustomLink to={ROUTES.INDEX}>
          <Icon src={LOGO} />
        </CustomLink>
      </Container>
      <RightContainer>
        <LightBulb src={LIGHT_BULB} />
      </RightContainer>
    </Wrapper>
  );
};

export default connect(mapStateToProps, null)(Navbar);
