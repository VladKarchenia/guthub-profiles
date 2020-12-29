import React, { useReducer } from "react";
import { SearchResultsContext } from "./searchResultsContext";
import { searchResultsReducer } from "./searchResultsReducer";
import { SHOW_LOADER, FETCH_USERS } from "./types";
import PropTypes from "prop-types";

export const SearchResultsState = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(searchResultsReducer, initialState);
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const findUsers = async (value) => {
    showLoader();
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${value}`
      );
      const json = await response.json();
      const payload = json.items.map((item) => {
        return {
          ...item,
        };
      });
      dispatch({ type: FETCH_USERS, payload });
    } catch (error) {
      throw new Error("Oops, something went wrong");
    }
  };

  return (
    <SearchResultsContext.Provider
      value={{
        showLoader,
        findUsers,
        loading: state.loading,
        users: state.users,
      }}
    >
      {children}
    </SearchResultsContext.Provider>
  );
};

SearchResultsState.propTypes = {
  children: PropTypes.node.isRequired,
};
