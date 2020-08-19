// Typescript:
import { TOGGLE_THEME } from '../action-types';
import { ThemeType } from "../../constants/ts/interfaces";

// Exports:
export type ActionType = typeof TOGGLE_THEME;
export type PayloadType = ThemeType;

export interface ToggleTheme {
  (payload: ThemeType): {
    type: typeof TOGGLE_THEME;
    payload: ThemeType;
  };
}
