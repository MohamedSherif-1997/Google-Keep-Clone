import React from "react";
import PropTypes from "prop-types";

import { Grid, withStyles } from "@material-ui/core";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Login from "../../components/login";

const styles = {
  login: {
    direction: "column",
    justify: "space-evenly",
    alignItems: "center",
  },
};

function LoginContainer(props) {
  const { classes, history } = props;
  return (
    <Grid container className={classes.login}>
      <Header />
      <Login history={history} />
      <Footer />
    </Grid>
  );
}

LoginContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginContainer);
