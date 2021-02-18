import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";

import KeepImage from "../images/keep.png";

const styles = {
  header: {
    display: "flex",
    width: "100%",
    height: "50px",
    color: "black",
    fontFamily: '"Times New Roman", Times, serif',
    padding: "10px 0px 0px 40px",
    fontSize: "20px",
  },
  img: {
    width: "50px",
    height: "50px",
    paddingRight: "20px",
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <img className={classes.img} src={KeepImage} alt="" />
      Keep
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
