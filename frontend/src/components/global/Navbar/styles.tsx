// Packages:
import styled from "styled-components";
import { Link } from "react-router-dom";

// Typescript:
import { WrapperProps } from "./ts/interfaces";

// Styles:
export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 101;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: 9vh;
  background: ${(props: WrapperProps) =>
    props.theme === "DARK" ? "rgb(0 0 0 / 0.8)" : "rgb(255 255 255 / 0.8)"};
  border-bottom: 1px
    ${(props: WrapperProps) => (props.theme === "DARK" ? "#201916" : "#dfe6e9")}
    solid;
  backdrop-filter: saturate(180%) blur(5px);
  transition: box-shadow 0.1s ease 0s;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomLink = styled(Link)`
  color: unset;
  text-decoration: none;
`;

export const Icon = styled.img`
  width: 2.5em;
`;
