// Packages:
import styled from "styled-components";
import { ParallaxBanner } from "react-scroll-parallax";

// Typescript:
import {
  WrapperProps,
  IntroductionProps,
  TitleProps,
  ButtonProps,
  FeaturesProps,
  FeatureTitleProps,
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

export const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Introduction = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80vw;
  min-height: 100vh;
  padding: 0vh 10vw;
  background: ${(props: IntroductionProps) =>
    props.theme === THEME.DARK ? "#000000" : "#f2f3f4"};
  transition: all 0.25s ease;
`;

export const IntroductionBlock = styled.div`
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

export const ColoredTitle = styled.span`
  background: none;
  background: linear-gradient(
    69deg,
    rgba(131, 56, 236, 1) 0%,
    rgba(255, 0, 110, 1) 100%
  );
  background-clip: unset;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Buttons = styled.div`
  display: inline-block;
`;

export const Button = styled.div`
  display: inline-block;
  width: 12em;
  height: 3em;
  margin: 2em 1em;
  font-weight: 600;
  border-radius: 0.3em;
  cursor: pointer;
  user-select: none;
  transition: all 0.25s ease;

  &:hover {
    color: ${(props: ButtonProps) =>
      props.theme === THEME.DARK ? "#f2f3f4" : "#0a0908"};
    background: unset;
    border: 1px solid
      ${(props: ButtonProps) =>
        props.theme === THEME.DARK ? "#f2f3f4" : "#0a0908"};
    transition: all 0.25s ease;
  }

  @media only screen and (max-width: 580px) {
    margin: 1em 1em;
  }
`;

export const SolidButton = styled(Button)`
  color: ${(props: ButtonProps) =>
    props.theme === THEME.DARK ? "#0a0908" : "#f2f3f4"};
  background: ${(props: ButtonProps) =>
    props.theme === THEME.DARK ? "#f2f3f4" : "#0a0908"};
  border: 1px solid
    ${(props: ButtonProps) =>
      props.theme === THEME.DARK ? "#f2f3f4" : "#0a0908"};
`;

export const HollowButton = styled(Button)`
  color: #636e72;
  border: 1px solid #c3c3c3;
`;

export const Features = styled.div`
  background: ${(props: FeaturesProps) =>
    props.theme === THEME.DARK ? "#000" : "#f2f3f4"};
  transition: all 0.25s ease;
`;

export const Feature = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80vw;
  min-height: 100vh;
  padding: 0vh 10vw;
`;

export const FeatureBlock = styled.div`
  text-align: center;
`;

export const FeatureTitle = styled.div`
  margin-bottom: 0.1em;
  margin-left: 0.1em;
  font-size: 7em;
  font-weight: 800;
  color: ${(props: FeatureTitleProps) =>
    props.theme === THEME.DARK ? "#f2f3f4" : "#0a0908"};
  text-shadow: ${(props: FeatureTitleProps) =>
    props.theme === THEME.DARK ? "0px 0px 75px rgba(0, 0, 0, 1)" : "unset"};
  transition: all 0.25s ease;

  /* SUPER small devices (smol phones, 360px and down) */
  @media only screen and (max-width: 600px) {
    font-size: 3em;
  }

  /* Extra small devices (phones, 600px and up) */
  @media only screen and (min-width: 600px) {
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

export const FeatureDescription = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: #323031;
  filter: invert(
    ${(props: FeatureTitleProps) => (props.theme === THEME.DARK ? 1 : 0)}
  );
  transition: all 0.25s ease;
`;

export const FeatureBackground = styled(ParallaxBanner)`
  position: absolute !important;
  min-width: 100vw;
  min-height: 100vh;
  background-size: cover;
`;

export const BeautifulFeatureBackground = styled(FeatureBackground)`
  filter: blur(2px);
`;

export const BeautifulFeatureTitle = styled(FeatureTitle)`
  color: ${(props: FeatureTitleProps) =>
    props.theme === THEME.DARK ? "#f2f3f4" : "#f2f3f4"};
  text-shadow: 0px 0px 75px rgba(0, 0, 0, 1);
`;

export const BeautifulFeatureDescription = styled(FeatureDescription)`
  color: ${(props: FeatureTitleProps) =>
    props.theme === THEME.DARK ? "#0a0908" : "#f2f3f4"};
  text-shadow: ${(props: FeatureTitleProps) =>
    props.theme === THEME.DARK
      ? "0px 0px 12px rgba(255, 255, 255, 1)"
      : "0px 0px 12px rgba(0, 0, 0, 1)"};
`;

export const TryNow = styled(Feature)`
  background: ${(props: FeaturesProps) =>
    props.theme === THEME.DARK ? "#000000" : "#f2f3f4"};
  transition: all 0.25s ease;
`;

export const TryNowBlock = styled(FeatureBlock)``;

export const TryNowTitle = styled(FeatureTitle)``;
