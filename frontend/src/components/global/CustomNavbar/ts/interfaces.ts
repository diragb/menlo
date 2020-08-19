// Typescript:
import { ThemeType } from "../../../../constants/ts/interfaces";

// Exports:
export interface NewTheme {
  theme: ThemeType;
}

export interface CustomNavbarPropsInterface {
  SUBDOMAIN: string;
  theme: ThemeType;
  toggleTheme: (newTheme: ThemeType) => void;
}

export interface WrapperProps {
  theme: ThemeType;
}

export interface LightBulbProps {
  theme: ThemeType;
}
