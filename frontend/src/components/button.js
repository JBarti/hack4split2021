import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={props.onClick}>
      <Button color={props.color} variant="contained">{props.children}</Button>
    </div>
  );
}

export default ContainedButtons;
