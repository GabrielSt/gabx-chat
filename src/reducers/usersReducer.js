import { ADD_USER, USERS_LIST } from "../actions/constants";

const initialState = [];

function userssReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return state.concat([{ name: action.name, id: action.id }]);
    case USERS_LIST:
      return action.users;
    default:
      return state;
  }
}

export default userssReducer;
