import React, { Fragment } from "react";
import styles from "./SearchResultsItem.module.scss";
import Link from "@material-ui/core/Link";
import { styled } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";

const StyledLink = styled(Link)({
  width: "100%",
  height: 42,
  background: "#146aec",
  borderRadius: "0 0 10px 10px",
  color: "white",
  fontSize: 15,
  fontWeight: 600,
  lineHeight: "42px",
  boxShadow: "0 1px 1px rgba(20, 106, 236, 0.15)",
  textDecoration: "none",
  border: "none",
  outline: "none",
  cursor: "pointer",
  textAlign: "center",
  "&:hover, &:active": {
    background: "#0047b1",
    textDecoration: "none"
  }
});

const StyledAvatar = styled(Avatar)({
  width: 100,
  height: 100
});

export const SearchResultsItem = ({ user }) => {
  return (
    <Fragment>
      <div className={styles.results_item}>
        <StyledAvatar alt={user.login} src={user.avatar_url} />
        <div className={styles.results_item_login}>
          {user.login}
        </div>
        <StyledLink href={user.html_url}>
          Follow
        </StyledLink>
      </div>
    </Fragment>
  );
};

SearchResultsItem.propTypes = {
  user: PropTypes.object.isRequired,
};