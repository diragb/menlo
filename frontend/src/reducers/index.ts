// Packages:
import { combineReducers, AnyAction } from "redux";

// Constants:
// import {
//   TOGGLE_PLAYER_VISIBILITY,
//   UPDATE_PLAYER_URL,
//   TOGGLE_TIMER_VISIBILITY,
// } from "../constants/action-types";

const initialState = {
  global: {},
};

// Functions:
const globalReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  global: globalReducer,
});

export default rootReducer;
