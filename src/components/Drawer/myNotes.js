import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import BrushSharpIcon from "@material-ui/icons/BrushSharp";
import CardContent from "@material-ui/core/CardContent";
import InsertPhotoRoundedIcon from "@material-ui/icons/InsertPhotoRounded";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: "600px",
    height: "300px",
  },
  cardContent: {
    display: "flex",
    width: "700px",
    justifyContent: "space-evenly",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    paddingRight: "30px",
  },
});

export default function Notes() {
  const classes = useStyles();
  const [noteClicked, setNoteClicked] = React.useState(false);

  return (
    <ClickAwayListener onClickAway={() => setNoteClicked(false)}>
      <div className={classes.cards}>
        {noteClicked ? (
          <Card className={classes.root}>
            <CardContent>
              <Typography>
                <TextField
                  id="outlined-full-width"
                  label="Title"
                  style={{ margin: 8 }}
                  placeholder="Placeholder"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Typography>
              <Typography>
                <TextField
                  id="outlined-basic"
                  label="Take Note"
                  style={{ margin: 8 }}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  placeholder="Take Notes...!"
                />
              </Typography>
              <CardActions>
                <Button
                  size="small"
                  style={{ backgroundColor: "SeaGreen", color: "black" }}
                  onClick={() => setNoteClicked(false)}
                >
                  clear
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent
              className={classes.cardContent}
              onClick={() => setNoteClicked(true)}
            >
              <div style={{ flexGrow: 1 }}>Take Note...</div>
              <div className={classes.icon}>
                <CheckBoxOutlinedIcon fontSize="medium" />
              </div>
              <div className={classes.icon}>
                <BrushSharpIcon fontSize="medium" />
              </div>
              <div className={classes.icon}>
                <InsertPhotoRoundedIcon fontSize="medium" />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </ClickAwayListener>
  );
}
