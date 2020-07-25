// Packages:
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

// Imports:
import SIMPLE_BACKGROUND from "../../assets/simple-background-pure-white.jpg";
import BEAUTIFUL_BACKGROUND from "../../assets/acrylic-background-2.jpg";
import COMPATIBLE_BACKGROUND from "../../assets/compatible-background-temp.jpg";
import LOGO from "../../assets/icon.png";

// Typescript:
import { TitleProps } from "./ts/interfaces";

// Styles:
const Wrapper = styled.div`
  position: relative;
  top: -9vh;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Introduction = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80vw;
  min-height: 100vh;
  padding: 0vh 10vw;
`;

const IntroductionBlock = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 7em;
  font-weight: 800;
  color: #0a0908;
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

const ColoredTitle = styled.span`
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

const Buttons = styled.div`
  display: inline-block;
`;

const Button = styled.div`
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
    color: #0a0908;
    background: unset;
    border: 1px solid #0a0908;
    transition: all 0.25s ease;
  }

  @media only screen and (max-width: 580px) {
    margin: 1em 1em;
  }
`;

const SolidButton = styled(Button)`
  color: #f2f3f4;
  background: #0a0908;
  border: 1px solid #0a0908;
`;

const HollowButton = styled(Button)`
  color: #636e72;
  border: 1px solid #c3c3c3;
`;

const Features = styled.div``;

const Feature = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80vw;
  min-height: 100vh;
  padding: 0vh 10vw;
`;

const FeatureBlock = styled.div`
  text-align: center;
`;

const FeatureTitle = styled.div`
  margin-bottom: 0.1em;
  margin-left: 0.1em;
  font-size: 7em;
  font-weight: 800;
  color: #0a0908;

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

const FeatureDescription = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: #323031;
`;

const FeatureBackground = styled(ParallaxBanner)`
  position: absolute !important;
  min-width: 100vw;
  min-height: 100vh;
  background-size: cover;
`;

const BeautifulFeatureBackground = styled(FeatureBackground)`
  filter: blur(2px);
`;

const BeautifulFeatureTitle = styled(FeatureTitle)`
  color: #f2f3f4;
  text-shadow: 0px 0px 75px rgba(0, 0, 0, 1);
`;

const BeautifulFeatureDescription = styled(FeatureDescription)`
  color: #f2f3f4;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 1);
`;

const TryNow = styled(Feature)``;

const TryNowBlock = styled(FeatureBlock)``;

const TryNowTitle = styled(FeatureTitle)``;

const Footer = styled.footer`
  min-width: 100vw;
  height: 55vh;
  margin-top: -9vh;
  padding: 5vh 0vw;
  padding-bottom: 2.5vh;
  background: #fff;
  color: #212529;
`;

const Categories = styled.div`
  width: 70vw;
  padding: 0vh 15vw;
`;

const Category = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 10em;
  min-height: 20em;
`;

const CategoryTitle = styled.div`
  margin: 1em 0em;
  font-weight: 700;
`;

const CategoryItem = styled.div`
  margin: 0.5em 0em;
  font-weight: 300;
`;

const Ending = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 15vh;
  padding: 0vh 10vw;
`;

const EndingBlock = styled.div``;

const Icon = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 2.5em;
`;

const Copyright = styled.div`
  display: inline-block;
  margin: 0em 0.5em;
  font-weight: 500;
`;

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
            <CategoryItem>home</CategoryItem>
            <CategoryItem>about</CategoryItem>
            <CategoryItem>team</CategoryItem>
            <CategoryItem>contact us</CategoryItem>
            <CategoryItem>support</CategoryItem>
          </Category>
          <Category>
            <CategoryTitle>legal</CategoryTitle>
            <CategoryItem>terms of service</CategoryItem>
            <CategoryItem>privacy policy</CategoryItem>
            <CategoryItem>cookie policy</CategoryItem>
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

export default Landing;
