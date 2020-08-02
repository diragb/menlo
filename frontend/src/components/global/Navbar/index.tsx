// Packages:
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Dispatch } from "redux";
import { connect } from "react-redux";

// Typescript:
import { InitialState } from "../../../reducers/ts/interfaces";
import { NavbarPropsInterface } from "./ts/interfaces";
import { ThemeType } from "../../../constants/ts/interfaces";

// Imports:
import LOGO from "../../../assets/icon.png";
import { LIGHT_BULB } from "../../../constants/icons";

// Constants:
import { ROUTES } from "../../../routes";
import { THEME } from "../../../constants";

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
    toggleTheme: (newTheme: ThemeType) => dispatch(toggleTheme(newTheme)),
  };
};

// Functions:
const Navbar = (props: NavbarPropsInterface) => {
  // Constants:
  const [cookies, setCookie] = useCookies(["theme"]);

  // Effects:
  useEffect(() => {
    if (typeof cookies.theme === "undefined") {
      setCookie("theme", THEME.LIGHT, { path: "/" });
    }
    props.toggleTheme(cookies.theme);
  }, []);

  useEffect(() => {
    console.log(cookies.theme);
    props.toggleTheme(cookies.theme);
  }, [cookies.theme]);

  // Functions:
  const toggleThemeCookie = (oldTheme: ThemeType) => {
    if (oldTheme === THEME.DARK) {
      setCookie("theme", THEME.LIGHT, { path: "/" });
    } else if (oldTheme === THEME.LIGHT) {
      setCookie("theme", THEME.DARK, { path: "/" });
    } else {
      setCookie("theme", THEME.LIGHT, { path: "/" });
    }
  };

  // Return:
  return (
    <Wrapper theme={props.theme}>
      <LeftContainer>
        <LightBulb
          src={LIGHT_BULB}
          theme={props.theme}
          onClick={() => {
            toggleThemeCookie(cookies.theme);
          }}
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
