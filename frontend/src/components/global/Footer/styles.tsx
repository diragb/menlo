// Packages:
import styled from "styled-components";
import { Link } from "react-router-dom";

// Typescript:
import {
  WrapperProps
} from "./ts/interfaces";

// Constants:
import { THEME } from "../../../constants";

// Exports:
export const Wrapper = styled.footer`
  min-width: 100vw;
  height: 45vh;
  padding: 5vh 0vw;
  padding-bottom: 2.5vh;
  background: ${(props: WrapperProps) =>
    props.theme === THEME.DARK ? "#0a0908" : "#fff"};
  color: ${(props: WrapperProps) =>
    props.theme === THEME.DARK ? "#dedad6" : "#212529"};
  transition: all 0.25s ease;
`;

export const Categories = styled.div`
  width: 70vw;
  padding: 0vh 15vw;
`;

export const Category = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 10em;
  min-height: 20em;
`;

export const CategoryTitle = styled.div`
  margin: 1em 0em;
  font-weight: 700;
`;

export const CategoryItem = styled(Link)`
  display: block;
  margin: 0.5em 0em;
  color: unset;
  font-weight: 300;
  text-decoration: none;
`;

export const Ending = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 14vh;
  padding: 0vh 10vw;
`;

export const EndingBlock = styled.div``;

export const Icon = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 2.5em;
`;

export const Copyright = styled.div`
  display: inline-block;
  margin: 0em 0.5em;
  font-weight: 500;
`;