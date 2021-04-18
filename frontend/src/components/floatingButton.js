import React from 'react';
import { makeStyles, Fab } from '@material-ui/core';
import  AddIcon  from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(3)
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function FloatingActionButtons(props) {
  const classes = useStyles();

  return (
    <div onClick={props.onClick} className={classes.root}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default FloatingActionButtons;
