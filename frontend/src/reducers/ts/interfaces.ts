// Typescript:
import { ActionType, PayloadType } from '../../actions/ts/interfaces';
import { ThemeType } from "../../constants/ts/interfaces";

// Exports:
export interface ActionInterface {
  type: ActionType;
  payload: PayloadType;
};

export interface StateInterface {
  global: {
    theme: ThemeType;
  };
};
