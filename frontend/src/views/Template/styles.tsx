// Packages:
import styled, { keyframes } from "styled-components";

// Typescript:
import {
  WrapperProps,
  ProfilePictureProps,
  AboutPictureProps,
  WorkProps,
  WorkPictureProps,
} from "./ts/interfaces";

// Constants:
import { THEME } from "../../constants";

// Styles:
const ProfilePictureBoxShadowRGB = (props: ProfilePictureProps) =>
  keyframes`
    0% { box-shadow: ${
      props.theme === THEME.LIGHT
        ? "0 30px 115px rgba(0, 0, 0, 0.6)"
        : "0 0px 115px rgba(50, 150, 150, 0.6)"
    }; }
    50% { box-shadow: ${
      props.theme === THEME.LIGHT
        ? "0 30px 115px rgba(0, 0, 0, 0.6)"
        : "0 0px 115px rgba(150, 150, 50, 0.6)"
    }; }
    100% { box-shadow: ${
      props.theme === THEME.LIGHT
        ? "0 30px 115px rgba(0, 0, 0, 0.6)"
        : "0 0px 115px rgba(150, 50, 150, 0.6)"
    }; }
`;

const AboutPictureBoxShadowRGB = (props: AboutPictureProps) =>
  keyframes`
    0% { box-shadow: ${
      props.theme === THEME.LIGHT
        ? "0 30px 115px rgba(0, 0, 0, 0.6)"
        : "0 0px 115px rgba(50, 150, 150, 0.6)"
    }; }
    50% { box-shadow: ${
      props.theme === THEME.LIGHT
        ? "0 30px 115px rgba(0, 0, 0, 0.6)"
        : "0 0px 115px rgba(150, 150, 50, 0.6)"
    }; }
    100% { box-shadow: ${
      props.theme === THEME.LIGHT
        ? "0 30px 115px rgba(0, 0, 0, 0.6)"
        : "0 0px 115px rgba(150, 50, 150, 0.6)"
    }; }
`;

const WorkPictureBoxShadowRGB = (props: WorkPictureProps) =>
  keyframes`
    0% { box-shadow: ${
      props.theme === THEME.LIGHT
        ? "0 15px 40px rgba(0, 0, 0, 0.4)"
        : "0 0 40px rgba(50, 150, 150, 0.4)"
    }; }
    50% { box-shadow: ${
      props.theme === THEME.LIGHT
        ? "0 15px 40px rgba(0, 0, 0, 0.4)"
        : "0 0 40px rgba(150, 150, 50, 0.4)"
    }; }
    100% { box-shadow: ${
      props.theme === THEME.LIGHT
        ? "0 15px 40px rgba(0, 0, 0, 0.4)"
        : "0 0 40px rgba(150, 50, 150, 0.4)"
    }; }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: -9vh;
  background: ${(props: WrapperProps) =>
    props.theme === THEME.DARK ? "#0a0908" : "#f2f3f4"};
  color: ${(props: WrapperProps) =>
    props.theme === THEME.DARK ? "#f2f3f4" : "#0a0908"};
`;

export const Flexbox = styled.div`
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  min-width: 80vw;
  min-height: 100vh;
  padding: 0vh 10vw;
`;

export const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DetailsWrapper = styled.div`
  float: left;
  width: 37.5vw;
  height: 35em;
  margin-right: 2.5vw;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 80vw;
    height: 10em;
    margin-top: 2em;
    margin-right: 0vw;
  }
`;

export const DetailsBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding-left: 1em;
  overflow-wrap: break-word;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    display: unset;
  }
`;

export const Title = styled.div`
  margin-bottom: 0.1em;
  margin-top: 0;
  font-size: 7vw;
  font-weight: 800;
  overflow-x: hidden;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    font-size: 3em;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 6vw;
  }

  /* Super large devices (4k monitors, 2750px and up) */
  @media only screen and (min-width: 2750px) {
    font-size: 7em;
  }
`;

export const Bio = styled.div`
  display: inline-block;
  width: 100%;
  font-family: "Roboto Mono", monospace;
  font-size: 1.5vw;
  text-transform: uppercase;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    font-size: 1em;
  }

  /* Extra small devices (phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 2vw;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 0.9em;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 1.5vw;
  }
`;

export const SocialMediaIcons = styled.div`
  width: 100%;
  margin-top: 1em;
`;

export const SocialMediaIcon = styled.img`
  width: 2em;
  margin-top: 0.5em;
  margin-right: 1.5em;
`;

export const PPMegaWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  float: right;
  width: 37.5vw;
  height: 35em;
  margin-left: 2.5vw;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 80vw;
    height: 15em;
    margin-left: 0vw;
  }
`;

export const ProfilePictureWrapper = styled.div`
  float: right;
  width: 25em;
  height: 35em;
  background: #f2f3f4;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    width: 15em;
    height: 15em;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    width: 15em;
    height: 15em;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    width: 20em;
    height: 20em;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1066px) {
    width: 25em;
    height: 25em;
  }
`;

export const ProfilePictureSkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
`;

export const ProfilePicture = styled.img`
  height: ${(props: ProfilePictureProps) =>
    props.profilePictureLoaded === true ? "100%" : "0%"};
  border-radius: 0.5em;
  opacity: ${(props: ProfilePictureProps) =>
    props.profilePictureLoaded === true ? "1" : "0"};
  animation-name: ${(props: ProfilePictureProps) =>
    ProfilePictureBoxShadowRGB(props)};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transition: opacity 0.5s ease;
`;

export const About = styled.div`
  width: 80vw;
  margin: 5em 0;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutPictureWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 40vw;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    width: 80vw;
    margin-bottom: 2em;
  }
`;

export const AboutPictureSkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
`;

export const AboutPicture = styled.img`
  width: ${(props: AboutPictureProps) =>
    props.aboutPictureLoaded === true ? "30vw" : "0"};
  border-radius: 0.5em;
  opacity: ${(props: AboutPictureProps) =>
    props.aboutPictureLoaded === true ? "1" : "0"};
  animation-name: ${(props: AboutPictureProps) =>
    AboutPictureBoxShadowRGB(props)};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transition: opacity 0.5s ease;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    width: ${(props: AboutPictureProps) =>
      props.aboutPictureLoaded === true ? "80vw" : "0"};
  }
`;

export const AboutDetails = styled.div`
  width: 40vw;
  display: inline-block;
  vertical-align: middle;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const AboutBody = styled.div`
  font-size: 1.3em;
`;

export const MyWork = styled.div`
  width: 80vw;
  margin: 5em 0;
  text-align: center;
`;

export const Works = styled.div`
  width: 80vw;
  margin-top: 2em;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Work = styled.div`
  display: inline-block;
  width: ${(props: WorkProps) =>
    props.worksLength === 0 ? 0 : 80 / props.worksLength}vw;
  height: 20em;
  transform: translateY(
    ${(props: WorkProps) => (--props.worksLength - props.workIndex) * 4}em
  );

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    width: 80vw;
    height: unset;
    margin-bottom: 3em;
    transform: unset;
  }
`;

export const WorkPictureWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const WorkPicture = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 0.5em;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  animation-name: ${(props: WorkPictureProps) =>
    WorkPictureBoxShadowRGB(props)};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export const WorkDetails = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2em;
  font-size: 0.8em;
`;

export const WorkTitle = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 60%;
  font-weight: 600;
  text-align: left;
`;

export const WorkBody = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 60%;
  text-align: left;
`;

export const WorkLink = styled.a`
  margin-left: 0.3em;
  font-weight: 600;
  color: unset;
  text-decoration: none;
`;
