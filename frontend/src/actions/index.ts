// Typescript:
import { ToggleTheme } from "./ts/interfaces";

// Constants:
import { TOGGLE_THEME } from "../constants/action-types";

// Exports:
export const toggleTheme: ToggleTheme = (payload) => {
  return { type: TOGGLE_THEME, payload };
};
