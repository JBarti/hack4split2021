import { makeStyles, Typography, Container, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

function Step3(props){
  const classes = useStyles();

  if (props.currentStep !== 3) { 
    return null
  }

  const { images, handleChange } = props;

  return(
    <Container style={{marginTop: "1rem"}}>
      <Typography variant="subtitle1">Bravo, tvoja kampanja sada ima ime i opis. U ovom koraku dodati ćeš slike koje će se prikazati u obliku slideshowa.</Typography>
      <input
        accept="image/*"
        className={classes.input}
        id="images"
        name="images"
        multiple
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="images">
        <Button variant="contained" color="primary" component="span" style={{marginTop: "1rem",}}>
          Izaberi slike
        </Button>
      </label>
    </Container>
  )
}

export default Step3;