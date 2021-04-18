import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function SimplePaper(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} style={{width:"90vw", minHeight:"60vh", overflow:"auto", overflowY:"scroll"}}>
          {props.children}
      </Paper>
    </div>
  );
}

export default SimplePaper;
