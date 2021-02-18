import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  listIcon: {
    backgroundColor: "#feefc3",
  },
};

function Lists(props) {
  const { handleListClick, classes, component } = props;

  return (
    <>
      <List>
        <ListItem
          button
          key="Notes"
          onClick={() => handleListClick("Notes")}
          className={clsx({
            [classes.listIcon]: component === "Notes",
          })}
        >
          <ListItemIcon>
            <EmojiObjectsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItem>
        <ListItem
          button
          key="Remainders"
          onClick={() => handleListClick("Remainders")}
          className={clsx({
            [classes.listIcon]: component === "Remainders",
          })}
        >
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Remainders" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleListClick("Edit Labels")}
          className={clsx({
            [classes.listIcon]: component === "Edit Labels",
          })}
        >
          <ListItemIcon>
            <CreateOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Edit Labels" />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => handleListClick("Archive")}
          className={clsx({
            [classes.listIcon]: component === "Archive",
          })}
        >
          <ListItemIcon>
            <ArchiveOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleListClick("Trash")}
          className={clsx({
            [classes.listIcon]: component === "Trash",
          })}
        >
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>
    </>
  );
}

Lists.propTypes = {
  classes: PropTypes.object.isRequired,
  component: PropTypes.string.isRequired,
  handleListClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Lists);
