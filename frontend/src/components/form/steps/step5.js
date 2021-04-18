import { Typography, Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    width: 200,
  },
}));

function Step5(props){
  const classes = useStyles();

  if (props.currentStep !== 5) { 
    return null
  }

  const { startDate, endDate, handleChange } = props;

  return(
    <Container style={{marginTop: "1rem"}}>
      <Typography variant="subtitle1">Unesite predviđeno vrijeme trajanja kampanje</Typography>
      <TextField
        id="startDate"
        name="startDate"
        label="Unesite datum početka kampanje"
        type="date"
        defaultValue={new Date()}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
        value={startDate}
      />
      <TextField
        id="endDate"
        name="endDate"
        label="Unesite datum kraja kampanje"
        type="date"
        defaultValue={new Date()}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleChange}
        value={endDate}
      />
    </Container>
  )
}

export default Step5;