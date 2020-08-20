// Packages:
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// Typescript:
import { StateInterface } from "../../reducers/ts/interfaces";
import { CookiePolicyInterface } from "./ts/interfaces";

// Components:
import Footer from "../../components/global/Footer";

// Styles:
import {
  Wrapper,
  Header,
  HeaderSection,
  Title,
  SubTitle,
  LegalText,
  ParagraphHeading,
  ParagraphSection,
} from "./styles";

// Redux:
const mapStateToProps = (state: StateInterface) => {
  // Return:
  return {
    theme: state.global.theme,
  };
};

// Functions:
const CookiePolicy = (props: CookiePolicyInterface) => {
  const [viewRendered, setViewRendered] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setViewRendered(true);
  }, []);

  return (
    <>
      <Wrapper theme={props.theme}>
        <Header theme={props.theme}>
          <HeaderSection>
            <Title viewRendered={viewRendered} theme={props.theme}>
              cookie policy.
            </Title>
            <SubTitle viewRendered={viewRendered} theme={props.theme}>Last updated: 2020-08-20</SubTitle>
          </HeaderSection>
        </Header>
        <LegalText theme={props.theme}>
        <ParagraphHeading>1. What Are Cookies</ParagraphHeading>
        <ParagraphSection>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</ParagraphSection>
        <ParagraphHeading>2. How We Use Cookies</ParagraphHeading>
        <ParagraphSection>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</ParagraphSection>
        <ParagraphHeading>3. Disabling Cookies</ParagraphHeading>
        <ParagraphSection>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.</ParagraphSection>
        <ParagraphHeading>4. The Cookies We Set</ParagraphHeading>
          <ParagraphSection>0.1 Account related cookies</ParagraphSection>
          <ParagraphSection>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</ParagraphSection>
          <ParagraphSection>0.2 Login related cookies</ParagraphSection>
          <ParagraphSection>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</ParagraphSection>
          <ParagraphSection>0.3 Email newsletters related cookies</ParagraphSection>
          <ParagraphSection>This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</ParagraphSection>
          <ParagraphSection>0.4 Site preferences cookies</ParagraphSection>
          <ParagraphSection>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</ParagraphSection>
        <ParagraphHeading>5. Third Party Cookies</ParagraphHeading>
        <ParagraphSection>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</ParagraphSection>
          <ParagraphSection>0.1 This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</ParagraphSection>
          <ParagraphSection>For more information on Google Analytics cookies, see the official Google Analytics page.</ParagraphSection>
          <ParagraphSection>0.2 Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.</ParagraphSection>
          <ParagraphSection>0.3 We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including - but not limited to - YouTube, Facebook, Instagram, Twitter, an others, will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.</ParagraphSection>
        <ParagraphHeading>6. Contact Us</ParagraphHeading>
        <ParagraphSection>If you have any questions about this Privacy Policy, please contact us by email: <b>support@menlo.in</b>.</ParagraphSection>
        </LegalText>
      </Wrapper>
      <Footer theme={props.theme} />
    </>
  );
};

// Exports:
export default connect(mapStateToProps, null)(CookiePolicy);
