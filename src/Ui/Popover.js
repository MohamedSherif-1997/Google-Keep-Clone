import React from "react";
import MuiPopover from "@material-ui/core/Popover";

export default function Popover(props) {
  const { anchorEl, onClose, children, center, ...rest } = props;
  return (
    <MuiPopover
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: center ? "center" : "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: center ? "center" : "left",
      }}
      {...rest}
    >
      {children}
    </MuiPopover>
  );
}
