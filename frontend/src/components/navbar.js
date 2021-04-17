<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, } from '@material-ui/core';
=======
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import
{
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';
>>>>>>> Fix :hammer:
import TemporaryDrawer from './drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

<<<<<<< HEAD
function Navbar(){
  const classes = useStyles();
  
  return(
    <AppBar position="static">
      <Toolbar>
        <TemporaryDrawer/>
=======
function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <TemporaryDrawer />
>>>>>>> Fix :hammer:
        <Typography variant="h6" className={classes.title}>
          donatQR
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
