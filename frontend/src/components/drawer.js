import { React, useState, Fragment } from 'react';
import {
  Drawer, List, Divider, ListItem, ListItemText, IconButton 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function TemporaryDrawer() {
  const classes = useStyles();
  const [toggle, setState] = useState(false);

/*   const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  }; */

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={() => setState(!toggle)}
    >
      <List>
        <Link onClick={() => setState(!toggle)} to="/dashboard"  style={{textDecoration: "none", color: "black"}}>
          <ListItem button key="Dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <ListItem button key="Profile">
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['Settings', 'About us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Fragment>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=> setState(!toggle)}>
          {<MenuIcon></MenuIcon>}
        </IconButton>
        <Drawer open={toggle} onClose={() => setState(!toggle)}>
          {list()}
        </Drawer>
      </Fragment>
    </div>
  );
}

export default TemporaryDrawer;