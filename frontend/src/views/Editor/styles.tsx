// Packages:
import styled from "styled-components";

// Typescript:
import { ProfilePictureProps } from "./ts/interfaces";

// Styles:
export const Wrapper = styled.div`
  position: relative;
  margin-top: -9vh;
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
  overflow-wrap: break-word;
`;

export const Name = styled.div`
  margin: 0.1em;
  margin-top: 0;
  font-size: 7vw;
  font-weight: 800;
  color: #0a0908;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    font-size: 3em;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 7vw;
  }

  /* Super large devices (4k monitors, 2750px and up) */
  @media only screen and (min-width: 2750px) {
    font-size: 7em;
  }
`;

export const Bio = styled.input`
  display: inline-block;
  width: 100%;
  margin-left: 0.9em;
  font-family: "Roboto Mono", monospace;
  font-size: 1.5vw;
  background: unset;
  border: unset;
  outline: none;
  text-transform: uppercase;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 768px) {
    font-size: 1em;
    margin-left: 0.4em;
  }

  /* Extra small devices (phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 2vw;
    margin-left: 0.5em;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    font-size: 0.9em;
    margin-left: 0.6em;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 1.5vw;
    margin-left: 0.6em;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    margin-left: 0.7em;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    margin-left: 0.9em;
  }
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
    height: 10em;
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
    width: 10em;
    height: 10em;
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
  transition: opacity 0.5s ease;
`;
