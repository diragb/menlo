// Typescript:
import { ThemeType } from "../../constants/ts/interfaces";

// Exports:
export interface ToggleTheme {
  (payload: ThemeType): {
    type: string;
    payload: ThemeType;
  };
}
