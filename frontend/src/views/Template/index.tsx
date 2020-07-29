// Packages:
import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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
} from "./styles";

// Functions:
const Template = () => {
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
      body:
        "Yes, I do underwater photography. Are you jealous yet of how amazing and OP I am?",
      link: null,
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
      <Wrapper>
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
                      <WorkPicture src={work.picture} />
                    </WorkPictureWrapper>
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
                  </Work>
                );
              })}
            </Works>
          </MyWork>
        </Flexbox>
      </Wrapper>
    </SkeletonTheme>
  );
};

// Exports:
export default Template;
