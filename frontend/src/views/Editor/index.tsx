// Packages:
import React, { useState, useEffect } from "react";
import { useInput } from "../../hooks/input-hook";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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
} from "./styles";

// Functions:
const Editor = () => {
  // State:
  const { bind: bindBio } = useInput("WRITER. EDITOR. DAD.");
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
                  Jonathan
                  <br /> Snafu
                </Name>
                <Bio type="text" maxLength={50} {...bindBio} />
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
export default Editor;
