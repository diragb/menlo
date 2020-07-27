// Packages:
import React, { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";

// Imports:
import SIMPLE_BACKGROUND from "../../assets/simple-background-pure-white.jpg";
import BEAUTIFUL_BACKGROUND from "../../assets/acrylic-background-2.jpg";
import COMPATIBLE_BACKGROUND from "../../assets/compatible-background-temp.jpg";
import LOGO from "../../assets/icon.png";

// Constants:
import { ROUTES } from "../../routes";

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

// Functions:
const Landing: React.FC = () => {
  const [viewRendered, setViewRendered] = useState(false);

  useEffect(() => {
    setViewRendered(true);
  }, []);

  return (
    <>
      <Wrapper>
        <Parallax y={[-50, 50]}>
          <Introduction>
            <IntroductionBlock>
              <Title viewRendered={viewRendered}>
                brand <ColoredTitle>yourself</ColoredTitle> better.
              </Title>
              <Buttons>
                <SolidButton>
                  <Flexbox>let's go!</Flexbox>
                </SolidButton>
                <HollowButton>
                  <Flexbox>watch demo</Flexbox>
                </HollowButton>
              </Buttons>
            </IntroductionBlock>
          </Introduction>
        </Parallax>
        <Features>
          <FeatureBackground
            layers={[
              {
                image: SIMPLE_BACKGROUND,
                amount: 0.5,
              },
            ]}
          ></FeatureBackground>
          <Feature>
            <FeatureBlock>
              <FeatureTitle>simple.</FeatureTitle>
              <FeatureDescription>
                no coding knowledge required.
              </FeatureDescription>
            </FeatureBlock>
          </Feature>
          <BeautifulFeatureBackground
            layers={[
              {
                image: BEAUTIFUL_BACKGROUND,
                amount: 0.5,
              },
            ]}
          ></BeautifulFeatureBackground>
          <Feature>
            <FeatureBlock>
              <BeautifulFeatureTitle>beautiful.</BeautifulFeatureTitle>
              <BeautifulFeatureDescription>
                looks good, feels good.
              </BeautifulFeatureDescription>
            </FeatureBlock>
          </Feature>
          <Feature>
            <FeatureBlock>
              <FeatureTitle>fast.</FeatureTitle>
              <FeatureDescription>
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
              <BeautifulFeatureTitle>compatible.</BeautifulFeatureTitle>
              <BeautifulFeatureDescription>
                looks good on all devices.
              </BeautifulFeatureDescription>
            </FeatureBlock>
          </Feature>
        </Features>
        <TryNow>
          <TryNowBlock>
            <TryNowTitle>get yours now.</TryNowTitle>
            <Buttons>
              <SolidButton>
                <Flexbox>let's go!</Flexbox>
              </SolidButton>
            </Buttons>
          </TryNowBlock>
        </TryNow>
      </Wrapper>
      <Footer>
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
export default Landing;
