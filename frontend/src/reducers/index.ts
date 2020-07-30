// Typescript:
import { ActionInterface, InitialState } from "./ts/interfaces";

// Constants:
import { TOGGLE_THEME } from "../constants/action-types";

import { THEME } from "../constants";

const initialState: InitialState = {
  global: {
    theme: THEME.DARK,
  },
};

// Functions:
const globalReducer = (state = initialState, action: ActionInterface) => {
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

// const rootReducer = combineReducers({
//   global: globalReducer,
// });

export default globalReducer;
