// Packages:
import React from "react";
import { connect } from "react-redux";

// Typescript:
import { StateInterface } from "../../../reducers/ts/interfaces";
import { FooterPropsInterface } from "./ts/interfaces";

// Imports:
import LOGO from "../../../assets/icon.png";

// Constants:
import { ROUTES } from "../../../routes";

// Styles:
import {
  Wrapper,
  Categories,
  Category,
  CategoryTitle,
  CategoryItem,
  Ending,
  EndingBlock,
  Icon,
  Copyright
} from "./styles";

// Redux:
const mapStateToProps = (state: StateInterface) => {
  // Return:
  return {
    theme: state.global.theme,
  };
};

// Functions:
const Footer = (props: FooterPropsInterface) => {
  return (
    <Wrapper theme={props.theme}>
      <Categories>
        <Category>
          <CategoryTitle>menlo</CategoryTitle>
          <CategoryItem to={ROUTES.HOME}>home</CategoryItem>
          <CategoryItem to="/about">about</CategoryItem>
          <CategoryItem to="/team">team</CategoryItem>
          <CategoryItem to="/contact">contact us</CategoryItem>
          <CategoryItem to="/support">support</CategoryItem>
        </Category>
        <Category>
          <CategoryTitle>legal</CategoryTitle>
          <CategoryItem to="/tos">terms of service</CategoryItem>
          <CategoryItem to="/pp">privacy policy</CategoryItem>
          <CategoryItem to="/cp">cookie policy</CategoryItem>
        </Category>
      </Categories>
      <Ending>
        <EndingBlock>
          <Icon src={LOGO} />
          <Copyright>copyright © 2020 menlo. all rights reserved.</Copyright>
        </EndingBlock>
      </Ending>
    </Wrapper>
  );
};

// Exports:
export default connect(mapStateToProps, null)(Footer);
