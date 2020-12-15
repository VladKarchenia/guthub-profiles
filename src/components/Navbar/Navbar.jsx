import React from "react";
import { NavLink } from "react-router-dom";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const StyledTypography = styled(Typography)({
  "&.MuiTypography-h1": {
      fontSize: 32,
      margin: "20px 0"
  }
});

const StyledButtonGroup = styled(ButtonGroup)({
  display: "flex",
  justifyContent: "center",
  "& button": {
    width: 100,
    padding: 0
  },
  "& .nav-link": {
    width: "100%",
    height: 42,
    lineHeight: "42px",
    color: "white",
    textDecoration: "none"
  }
});

export const Navbar = () => (
  <div className='header'>
    <StyledTypography variant='h1' align='center'>GitHub Users App</StyledTypography>
    <StyledButtonGroup disableElevation variant='contained' color='primary' size='large'>
      <Button>
        <NavLink className='nav-link' to='/' exact>
          Main
        </NavLink>
      </Button>
      <Button>
        <NavLink className='nav-link' to='/about'>
          About
        </NavLink>
      </Button>
    </StyledButtonGroup>
  </div>
);