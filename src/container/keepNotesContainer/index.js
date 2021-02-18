import React from "react";
import { Grid } from "@material-ui/core";
import KeepNotes from "../../components/Drawer";

function KeepNotesContainer(props) {
  return (
    <Grid container>
      <KeepNotes history={props.history} />
    </Grid>
  );
}

export default KeepNotesContainer;
