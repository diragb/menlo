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
  Name,
  Bio,
  SocialMediaIcons,
  SocialMediaIcon,
} from "./styles";

// Functions:
const Template = () => {
  // State:
  const [profilePictureLoaded, setProfilePictureLoaded] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

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
                <Name>
                  Jessica
                  <br /> Snafu
                </Name>
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
      </Wrapper>
    </SkeletonTheme>
  );
};

// Exports:
export default Template;
