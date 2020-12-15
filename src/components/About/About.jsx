import React from "react";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import logo from "../../icons/github.png";

const StyledAboutTypography = styled(Typography)({
  margin: "50px 0 40px"
});

const StyledAboutIcon = styled(Avatar)({
  width: 100,
  height: 100
});

export const About = () => (
  <div className='app_container'>
    <StyledAboutTypography>
      GitHub Users App – a simple application that allows you to find any github user quickly and effortlessly. Try it now &#x1f608;
    </StyledAboutTypography>
    <StyledAboutIcon alt='github icon' src={logo} />
  </div>
);