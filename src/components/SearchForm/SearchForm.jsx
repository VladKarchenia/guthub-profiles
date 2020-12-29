// import React, { useEffect, useContext, Fragment } from "react";
import React, { useEffect, Fragment } from "react";
import { SearchResults } from "../SearchResults/SearchResults.jsx";
// import { SearchResultsContext } from "../../context/searchResultsContext.js";
import { Loader } from "../Loader/Loader.jsx";
// import styles from "./SearchForm.module.scss";
// import Button from "@material-ui/core/Button";
// import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
// import { styled } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setSearchValue, thunkFetchUsers } from "../../actions/actions.js";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

// const StyledButton = styled(Button)({
//   background: "#e21e35",
//   width: "15%",
//   height: 54,
//   minWidth: 110,
//   borderRadius: "0 5px 5px 0",
//   fontSize: 15,
//   fontWeight: 600,
//   letterSpacing: "0.005em",
//   padding: "2px 0 0",
//   boxShadow: "0 2px 1px #c20017",
//   "&:hover, &:active": {
//     background: "#bf0016",
//     boxShadow: "0 2px 1px #9e0012"
//   },
//   "& .MuiButton-label": {
//     fontWeight: 600
//   }
// });

const StyledInput = withStyles({
  root: {
    margin: "50px 0 30px",
    fontSize: 17,
    color: "#333",
    fontWeight: 600,
    borderRadius: 5,
    "& .MuiOutlinedInput-root": {
      borderRadius: 5,
    }
  }
})(TextField);

const SearchForm = ({ searchValue, setSearchValue, thunkFetchUsers, isLoading, users }) => {
  // const { isLoading, users, findUsers } = useContext(SearchResultsContext);
  let history = useHistory();

  useEffect(() => {
    let searchValueFromHistory = history.location.search.replace("?search=", "");
    if (searchValueFromHistory) {
      thunkFetchUsers(searchValueFromHistory);
    }
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchValue.trim()) {
  //     thunkFetchUsers(searchValue);
  //     setSearchValue("");
  //   }
  // };

  const handleSearchChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    history.push({
      pathname: "/",
      search: `?search=${newValue}`,
    });
  };

  return (
    <Fragment>
      {/* <form className={styles.search} onSubmit={handleSubmit} noValidate autoComplete='off'>
        <StyledInput id='outlined-search' label='Find a user' type='search' variant='outlined' value={searchValue} onChange={handleSearchChange} fullWidth />
        <StyledButton variant='contained' color='secondary' type='submit'>
          <Icon>search</Icon>
          Search
        </StyledButton>
      </form> */}
      <StyledInput id='outlined-search' label='Find a user' type='search' variant='outlined' value={searchValue} onChange={handleSearchChange} fullWidth autoComplete='off' />
      {isLoading ?
        <Loader />
        :
        <SearchResults
          users={
            users && users.length > 0
              ? users
              : []
          }
        />
      }
    </Fragment>
  );
};

export default connect(
  (state) => ({
    searchValue: state.findUsers.searchValue,
    isLoading: state.findUsers.isLoading,
    users: state.findUsers.users,
  }),
  {
    setSearchValue,
    thunkFetchUsers,
  }
)(SearchForm);

SearchForm.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  isLoading: PropTypes.bool,
  users: PropTypes.array,
  thunkFetchUsers: PropTypes.func,
};
