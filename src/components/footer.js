import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";

const styles = {
  footer: {
    width: "100%",
    height: "35px",
    textAlign: "center",
    color: "black",
    fontFamily: '"Soleil",Helvetica,Arial,sans-serif',
    fontSize: "15px",
  },
};

function Footer(props) {
  const { classes } = props;
  return <div className={classes.footer}>copyrights by sherif 2020</div>;
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
