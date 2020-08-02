// Typescript:
import { ThemeType } from "../../constants/ts/interfaces";

// Exports:
export interface ActionInterface {
  type: string;
  payload: any;
}

export interface InitialState {
  global: {
    theme: ThemeType;
  };
}
