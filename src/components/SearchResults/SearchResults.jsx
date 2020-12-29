import React, { Fragment } from "react";
import styles from "./SearchResults.module.scss";
import PropTypes from "prop-types";
import { SearchResultsItem } from "./SearchResultsItem/SearchResultsItem.jsx";

export const SearchResults = ({ users }) => {
  return (
    <Fragment>
      <div className={styles.found_number}>
        {users.length > 0
          ? `We found ${users.length} users for your request`
          : "You can find any GitHub user you want"}
      </div>
      <div className={styles.results}>
        {users.map((user) => {
          return (
            <SearchResultsItem key={user.id} user={user} />
          );
        })}
      </div>
    </Fragment>
  );
};

SearchResults.propTypes = {
  users: PropTypes.array.isRequired,
};
