import { combineReducers } from "redux";
import {
  SET_SEARCH_VALUE,
  GET_USERS,
  START_LOADING,
} from "../constants/constants";

const initialState = {
  searchValue: "",
  users: [],
  isLoading: false,
};

const findUsers = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_SEARCH_VALUE:
    return {
      ...state,
      searchValue: payload,
    };
  case GET_USERS:
    return {
      ...state,
      isLoading: false,
      users: payload,
    };
  case START_LOADING:
    return {
      ...state,
      isLoading: true,
    };
  default:
    return state;
  }
};

export const rootReducer = combineReducers({
  findUsers,
});
