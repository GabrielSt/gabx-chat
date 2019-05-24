import {} from "../actions/constants";

const initialState = {};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case "ACTION_TEST":
      return {};
    default:
      return state;
  }
}

export default chatReducer;
