// Imports:
import { DARK, LIGHT } from '../index';

// Exports:
export interface ThemeObjectInterface {
  DARK: typeof DARK;
  LIGHT: typeof LIGHT;
}

export type ThemeType = typeof DARK | typeof LIGHT;
