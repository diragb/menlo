// Typescript:
import { ThemeType } from "../../../constants/ts/interfaces";

// Exports:
export interface PrivacyPolicyInterface {
  theme: ThemeType;
};

export interface WrapperProps {
  theme: ThemeType;
};

export interface HeaderProps {
  theme: ThemeType;
};

export interface TitleProps {
  viewRendered: boolean;
  theme: ThemeType;
};

export interface SubTitleProps {
  viewRendered: boolean;
  theme: ThemeType;
};

export interface LegalTextProps {
  theme: ThemeType;
}
