import React, { Component } from "react";

import { withStyles } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import Popover from "../Ui/Popover";

const styles = {
  logout: {
    color: "#DF041F",
  },
  identity: {
    padding: "20px 20px 10px 20px",
    color: "#83959F",
  },
  copyright: {
    width: 16,
    height: 16,
    verticalAlign: "middle",
  },
  icon: {
    fontSize: "xx-large",
    color: "wheat",
  },
};

class Logout extends Component {
  state = {
    anchorEl: null,
  };

  handleUserMenuClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleUserMenuClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  logout = () => {
    this.props.history.push(`/login`);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleUserMenuClick} size="small">
          <AccountCircleIcon className={classes.icon} />
        </Button>
        <Popover
          id="user-menu"
          anchorEl={this.state.anchorEl}
          onClose={this.handleUserMenuClose}
        >
          <MenuItem onClick={this.logout} className={classes.logout}>
            Log out
          </MenuItem>
          <Divider />
          <Typography className={classes.identity}>
            <CopyrightIcon className={classes.copyright} /> Your Notes-App
            <br />
            2020 | v1.0.0
          </Typography>
        </Popover>
      </div>
    );
  }
}

export default withStyles(styles)(Logout);
