// Typescript:
import { ActionInterface, StateInterface } from "./ts/interfaces";

// Constants:
import { TOGGLE_THEME } from "../actions/action-types";

import { THEME } from "../constants";

const initialState: StateInterface = {
  global: {
    theme: THEME.LIGHT,
  },
};

// Functions:
const reducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        global: {
          theme: action.payload,
        },
      };
    default:
      return state;
  }
};

// Exports:
export default reducer;
