// Packages:
import styled from "styled-components";

// Typescript:
import {
  WrapperProps,
  HeaderProps,
  TitleProps,
  SubTitleProps,
  LegalTextProps
} from "./ts/interfaces";

// Constants:
import { THEME } from "../../constants";

// Styles:
export const Wrapper = styled.div`
  position: relative;
  margin-top: -9vh;
  background: ${(props: WrapperProps) =>
    props.theme === THEME.DARK ? "#000000" : "#f2f3f4"};
  transition: all 0.25s ease;
`;

export const Header = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80vw;
  min-height: 100vh;
  padding: 0vh 10vw;
  background: ${(props: HeaderProps) =>
    props.theme === THEME.DARK ? "#000000" : "#f2f3f4"};
  transition: all 0.25s ease;
`;

export const HeaderSection = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  font-size: 7em;
  font-weight: 800;
  color: ${(props: TitleProps) =>
    props.theme === THEME.DARK ? "#f2f3f4" : "#0a0908"};
  opacity: ${(props: TitleProps) => (props.viewRendered === true ? "1" : "0")};
  transform: translate(
    0,
    ${(props: TitleProps) => (props.viewRendered === true ? "0" : "0.3em")}
  );
  transition: all 0.8s ease;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 4em;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 4em;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 4em;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 6em;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 7em;
  }
`;

export const SubTitle = styled.div`
  margin-top: 0.5em;
  font-size: 1.5em;
  font-weight: 800;
  color: ${(props: SubTitleProps) =>
    props.theme === THEME.DARK ? "#f2f3f4" : "#0a0908"};
  opacity: ${(props: SubTitleProps) => (props.viewRendered === true ? "1" : "0")};
  transform: translate(
    0,
    ${(props: SubTitleProps) => (props.viewRendered === true ? "0" : "0.5em")}
  );
  transition: all 0.8s ease 0.1s;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 1em;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 1.25em;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 1.5em;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 1.5em;
  }
`;

export const LegalText = styled.div`
  min-width: 80vw;
  min-height: 100vh;
  padding: 10vh 10vw;
  color: ${(props: LegalTextProps) =>
    props.theme === THEME.DARK ? "#f2f3f4" : "#0a0908"};
  background: ${(props: LegalTextProps) =>
    props.theme === THEME.DARK ? "#000000" : "#f2f3f4"};
  transition: all 0.25s ease;
`;

export const ParagraphHeading = styled.p`
  margin: 0;
  margin-top: 2em;
  font-weight: 700;
  font-size: 5em;
`;

export const ParagraphSection = styled.p`
  margin: 0.5em 0;
  font-size: 2em;
`;
