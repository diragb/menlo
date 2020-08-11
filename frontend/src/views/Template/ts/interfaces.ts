// Typescript:
import { ThemeType } from "../../../constants/ts/interfaces";

// Exports:
export interface TemplatePropsInterface {
  theme: ThemeType;
}

export interface WrapperProps {
  theme: ThemeType;
}

export interface ProfilePictureProps {
  profilePictureLoaded: boolean;
  theme: ThemeType;
}

export interface AboutPictureProps {
  aboutPictureLoaded: boolean;
  theme: ThemeType;
}

export interface WorkProps {
  worksLength: number;
  workIndex: number;
}

export interface WorkPictureProps {
  theme: ThemeType;
}

export interface SkillBulletProps {
  rgb: [number, number, number];
  theme: ThemeType;
}
