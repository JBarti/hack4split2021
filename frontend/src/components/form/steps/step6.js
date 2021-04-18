import { Typography, Container, TextField } from '@material-ui/core';

function Step6(props){
  if (props.currentStep !== 6) { 
    return null
  }

  const { items, handleChange } = props;

  return(
    <Container style={{marginTop: "1rem"}}>
      <Typography variant="subtitle1">U ovom koraku dodajete potrebne namirnie za realizaciju svoje kampanje putem search bar-a</Typography>
      <TextField 
        id="item"
        name="item"
        label="Potražite namirnicu" 
        variant="filled"
        style={{marginTop:"1rem"}}
      />
    </Container>
  )
}

export default Step6;