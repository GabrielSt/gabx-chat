import { ADD_USER, USERS_LIST } from "./constants";

let nextUserId = 0;

export const addUser = name => ({
  type: ADD_USER,
  id: nextUserId++,
  name
});

export const populateUsersList = users => ({
  type: USERS_LIST,
  users
});
