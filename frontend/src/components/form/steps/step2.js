import { Typography, Container, TextField } from '@material-ui/core';
import text from './step2_text';

function Step2(props){
  if (props.currentStep !== 2) { 
    return null
  }

  const { description, handleChange } = props;

  return(
    <Container style={{marginTop: "1rem"}}>
      <Typography variant="subtitle1">{text}</Typography>
      <TextField 
        id="description" 
        name="description"
        style={{marginTop: "1rem", width:"70%"}} 
        label="Unesite opis"
        onChange={handleChange}
        value={description}
        inputProps={{
          autoComplete: 'off',
        }}
        multiline
      />
    </Container>
  )
}

export default Step2;