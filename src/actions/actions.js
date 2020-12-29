import {
  SET_SEARCH_VALUE,
  GET_USERS,
  START_LOADING,
} from "../constants/constants";

export const setSearchValue = (value) => ({
  type: SET_SEARCH_VALUE,
  payload: value,
});

export const thunkFetchUsers = (value) => {
  return (dispatch) => {
    dispatch({ type: START_LOADING });

    fetch(`https://api.github.com/search/users?q=${value}`)
      .then((response) => response.json())
      .then((json) => dispatch({ type: GET_USERS, payload: json.items }));
  };
};
