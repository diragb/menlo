// Packages:
import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { connect } from "react-redux";

// Typescript:
import { StateInterface } from "../../reducers/ts/interfaces";
import { LandingPropsInterface } from "./ts/interfaces";

// Imports:
import SIMPLE_BACKGROUND_LIGHT from "../../assets/simple-background-pure-white.jpg";
import SIMPLE_BACKGROUND_DARK from "../../assets/simple-background-pure-black.jpg";
import BEAUTIFUL_BACKGROUND_LIGHT from "../../assets/acrylic-background-2-light.jpg";
import BEAUTIFUL_BACKGROUND_DARK from "../../assets/acrylic-background-2-dark.jpg";
import COMPATIBLE_BACKGROUND from "../../assets/compatible-background-temp.jpg";
import LOGO from "../../assets/icon.png";

// Constants:
import { ROUTES } from "../../routes";
import { THEME } from "../../constants";

// Styles:
import {
  Wrapper,
  Introduction,
  IntroductionBlock,
  Title,
  ColoredTitle,
  Buttons,
  SolidButton,
  Flexbox,
  HollowButton,
  Features,
  FeatureBackground,
  Feature,
  FeatureBlock,
  FeatureTitle,
  FeatureDescription,
  BeautifulFeatureBackground,
  BeautifulFeatureTitle,
  BeautifulFeatureDescription,
  TryNow,
  TryNowBlock,
  TryNowTitle,
  Footer,
  Categories,
  Category,
  CategoryTitle,
  CategoryItem,
  Ending,
  EndingBlock,
  Icon,
  Copyright,
} from "./styles";

// Redux:
const mapStateToProps = (state: StateInterface) => {
  // Return:
  return {
    theme: state.global.theme,
  };
};

// Functions:
const Landing = (props: LandingPropsInterface) => {
  const [viewRendered, setViewRendered] = useState(false);

  useEffect(() => {
    setViewRendered(true);
  }, []);

  return (
    <>
      <Wrapper theme={props.theme}>
        <Parallax y={[-50, 50]}>
          <Introduction theme={props.theme}>
            <IntroductionBlock>
              <Title viewRendered={viewRendered} theme={props.theme}>
                brand <ColoredTitle>yourself</ColoredTitle> better.
              </Title>
              <Buttons>
                <SolidButton theme={props.theme}>
                  <Flexbox>let's go!</Flexbox>
                </SolidButton>
                <HollowButton theme={props.theme}>
                  <Flexbox>watch demo</Flexbox>
                </HollowButton>
              </Buttons>
            </IntroductionBlock>
          </Introduction>
        </Parallax>
        <Features theme={props.theme}>
          <FeatureBackground
            layers={[
              {
                image:
                  props.theme === THEME.DARK
                    ? SIMPLE_BACKGROUND_DARK
                    : SIMPLE_BACKGROUND_LIGHT,
                amount: 0.5,
              },
            ]}
          ></FeatureBackground>
          <Feature>
            <FeatureBlock>
              <FeatureTitle theme={props.theme}>simple.</FeatureTitle>
              <FeatureDescription theme={props.theme}>
                no coding knowledge required.
              </FeatureDescription>
            </FeatureBlock>
          </Feature>
          <BeautifulFeatureBackground
            layers={[
              {
                image:
                  props.theme === THEME.DARK
                    ? BEAUTIFUL_BACKGROUND_DARK
                    : BEAUTIFUL_BACKGROUND_LIGHT,
                amount: 0.5,
              },
            ]}
          ></BeautifulFeatureBackground>
          <Feature>
            <FeatureBlock>
              <BeautifulFeatureTitle theme={props.theme}>
                beautiful.
              </BeautifulFeatureTitle>
              <BeautifulFeatureDescription theme={props.theme}>
                looks good, feels good.
              </BeautifulFeatureDescription>
            </FeatureBlock>
          </Feature>
          <Feature>
            <FeatureBlock>
              <FeatureTitle theme={props.theme}>fast.</FeatureTitle>
              <FeatureDescription theme={props.theme}>
                setup takes less than a minute.
              </FeatureDescription>
            </FeatureBlock>
          </Feature>
          <FeatureBackground
            layers={[
              {
                image: COMPATIBLE_BACKGROUND,
                amount: 0.5,
              },
            ]}
          ></FeatureBackground>
          <Feature>
            <FeatureBlock>
              <BeautifulFeatureTitle theme={props.theme}>
                compatible.
              </BeautifulFeatureTitle>
              <BeautifulFeatureDescription theme={props.theme}>
                looks good on all devices.
              </BeautifulFeatureDescription>
            </FeatureBlock>
          </Feature>
        </Features>
        <TryNow theme={props.theme}>
          <TryNowBlock>
            <TryNowTitle theme={props.theme}>get yours now.</TryNowTitle>
            <Buttons>
              <SolidButton theme={props.theme}>
                <Flexbox>let's go!</Flexbox>
              </SolidButton>
            </Buttons>
          </TryNowBlock>
        </TryNow>
      </Wrapper>
      <Footer theme={props.theme}>
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
      </Footer>
    </>
  );
};

// Exports:
export default connect(mapStateToProps, null)(Landing);
