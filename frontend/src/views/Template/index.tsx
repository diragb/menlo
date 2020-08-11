// Packages:
import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { connect } from "react-redux";
import FlatColors from "flat-colors";

// Typescript:
import { InitialState } from "../../reducers/ts/interfaces";
import { TemplatePropsInterface } from "./ts/interfaces";

// Imports:
import { SOCIAL_MEDIA } from "../../constants/icons";

// Styles:
import {
  Wrapper,
  Flexbox,
  Cover,
  PPMegaWrapper,
  ProfilePictureWrapper,
  ProfilePictureSkeletonWrapper,
  ProfilePicture,
  DetailsWrapper,
  DetailsBlock,
  Title,
  Bio,
  SocialMediaIcons,
  SocialMediaIcon,
  About,
  AboutPictureWrapper,
  AboutPictureSkeletonWrapper,
  AboutPicture,
  AboutDetails,
  AboutBody,
  MyWork,
  Works,
  Work,
  WorkPictureWrapper,
  WorkPicture,
  WorkDetails,
  WorkTitle,
  WorkBody,
  WorkLink,
  SkillsWrapper,
  Skills,
  Skill,
  SkillBullet,
  SkillLink,
  SkillName,
} from "./styles";

// Redux:
const mapStateToProps = (state: InitialState) => {
  // Return:
  return {
    theme: state.global.theme,
  };
};

// Functions:
const Template = (props: TemplatePropsInterface) => {
  // State:
  const [profilePictureLoaded, setProfilePictureLoaded] = useState(false);
  const [aboutPictureLoaded, setAboutPictureLoaded] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  // Temp:
  const works = [
    {
      id: 1,
      picture:
        "https://images.pexels.com/photos/3046632/pexels-photo-3046632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Underwater photography at a truly remarkable scale.",
      body:
        "Yes, I do underwater photography. Are you jealous yet of how amazing and OP I am? I'm far better than you are, you inconsequential rabbit.",
      link: "https://www.aaronzarabi.com/",
    },
    {
      id: 2,
      picture:
        "https://images.pexels.com/photos/2820884/pexels-photo-2820884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Yes, I drive.",
      body: "Vroom vroom, nigga.",
      link: null,
    },
    {
      id: 3,
      picture:
        "https://images.pexels.com/photos/3046632/pexels-photo-3046632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Underwater photography at a truly remarkable scale.",
      body:
        "Yes, I do underwater photography. Are you jealous yet of how amazing and OP I am? I'm far better than you are, you inconsequential rabbit.",
      link: "https://www.aaronzarabi.com/",
    },
  ];

  const skills = [
    {
      name: "HTML",
      link: "https://w3schools.com/html",
    },
    {
      name: "CSS",
      link: "https://w3schools.com/html",
    },
    {
      name: "Javascript",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
    {
      name: "React Native",
      link: "https://w3schools.com/html",
    },
  ];

  // Effects:
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowInnerWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  // Return:
  return (
    <SkeletonTheme color="#ccc">
      <Wrapper theme={props.theme}>
        <Flexbox>
          <Cover>
            {windowInnerWidth > 768 ? (
              <></>
            ) : (
              <PPMegaWrapper>
                <ProfilePictureWrapper>
                  {profilePictureLoaded === false && (
                    <ProfilePictureSkeletonWrapper>
                      <Skeleton height="100%" width="100%" />
                    </ProfilePictureSkeletonWrapper>
                  )}
                  <ProfilePicture
                    src="https://thispersondoesnotexist.com/image"
                    onLoad={() => setProfilePictureLoaded(true)}
                    profilePictureLoaded={profilePictureLoaded}
                    theme={props.theme}
                  />
                </ProfilePictureWrapper>
              </PPMegaWrapper>
            )}
            <DetailsWrapper>
              <DetailsBlock>
                <Title>
                  Jessica
                  <br /> Snafu
                </Title>
                <Bio>WRITER. EDITOR. DAD.</Bio>
                <SocialMediaIcons>
                  <SocialMediaIcon src={SOCIAL_MEDIA.FACEBOOK} />
                  <SocialMediaIcon src={SOCIAL_MEDIA.BEHANCE} />
                  <SocialMediaIcon src={SOCIAL_MEDIA.DISCORD} />
                  <SocialMediaIcon src={SOCIAL_MEDIA.DRIBBLE} />
                  <SocialMediaIcon src={SOCIAL_MEDIA.GITHUB} />
                  <SocialMediaIcon src={SOCIAL_MEDIA.INSTAGRAM} />
                  <SocialMediaIcon src={SOCIAL_MEDIA.PATREON} />
                  <SocialMediaIcon src={SOCIAL_MEDIA.STACKOVERFLOW} />
                </SocialMediaIcons>
              </DetailsBlock>
            </DetailsWrapper>
            {windowInnerWidth > 768 ? (
              <PPMegaWrapper>
                <ProfilePictureWrapper>
                  {profilePictureLoaded === false && (
                    <ProfilePictureSkeletonWrapper>
                      <Skeleton height="100%" width="100%" />
                    </ProfilePictureSkeletonWrapper>
                  )}
                  <ProfilePicture
                    src="https://thispersondoesnotexist.com/image"
                    onLoad={() => setProfilePictureLoaded(true)}
                    profilePictureLoaded={profilePictureLoaded}
                    theme={props.theme}
                  />
                </ProfilePictureWrapper>
              </PPMegaWrapper>
            ) : (
              <></>
            )}
          </Cover>
        </Flexbox>
        <Flexbox>
          <About>
            <AboutPictureWrapper>
              {aboutPictureLoaded === false && (
                <AboutPictureSkeletonWrapper>
                  <Skeleton
                    height="15em"
                    width={windowInnerWidth > 768 ? "30vw" : "80vw"}
                  />
                </AboutPictureSkeletonWrapper>
              )}
              <AboutPicture
                src="https://images.pexels.com/photos/1724374/pexels-photo-1724374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                onLoad={() => setAboutPictureLoaded(true)}
                aboutPictureLoaded={aboutPictureLoaded}
                theme={props.theme}
              />
            </AboutPictureWrapper>
            <AboutDetails>
              <Title>About</Title>
              <AboutBody>
                Aaron Zarabi is a stand up comedian recently returning from his
                American political exile as the only Jew in Iceland. Originally
                from New York City, Aaron has taken on the European comedy scene
                by force, garnering Fringe awards and selling out weekly shows
                at Iceland's premiere comedy club.
                <br />
                <br />
                Aaron has performed across the United States and Europe and is
                now back on his home turf as aregular at West Side Comedy Club
                and producing his monthly show's "White Sauce Hot Sauce" and
                "KROWDWERK" at QED Astoria.
                <br />
                <br />
                Catch him live weekly at comedy clubs all over New York City!
              </AboutBody>
            </AboutDetails>
          </About>
        </Flexbox>
        <Flexbox>
          <SkillsWrapper>
            <Title>Skills</Title>
            <Skills>
              {skills.map((skill, index) => {
                return (
                  <Skill key={index}>
                    <SkillBullet rgb={FlatColors()} theme={props.theme} />
                    <SkillLink href={skill.link} target="_blank">
                      <SkillName>{skill.name}</SkillName>
                    </SkillLink>
                  </Skill>
                );
              })}
            </Skills>
          </SkillsWrapper>
        </Flexbox>
        <MyWork>
          <Title>Works</Title>
          <Works>
            {works.map((work, workIndex) => {
              return (
                <Work
                  worksLength={works.length}
                  workIndex={workIndex}
                  key={work.id}
                >
                  <WorkPictureWrapper>
                    <WorkPicture src={work.picture} theme={props.theme} />
                    <WorkDetails>
                      <WorkTitle>{work.title}</WorkTitle>
                      <WorkBody>
                        {work.body}
                        {work.link === null ? (
                          <></>
                        ) : (
                          <WorkLink href={work.link} target="_blank">
                            More.
                          </WorkLink>
                        )}
                      </WorkBody>
                    </WorkDetails>
                  </WorkPictureWrapper>
                </Work>
              );
            })}
          </Works>
        </MyWork>
      </Wrapper>
    </SkeletonTheme>
  );
};

// Exports:
export default connect(mapStateToProps, null)(Template);
