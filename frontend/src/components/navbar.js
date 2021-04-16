import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, } from '@material-ui/core';
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

function Navbar(){
  const classes = useStyles();
  
  return(
    <AppBar position="static">
      <Toolbar>
        <TemporaryDrawer/>
        <Typography variant="h6" className={classes.title}>
          donatQR
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
