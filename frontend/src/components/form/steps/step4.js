import { Typography, Container, TextField } from '@material-ui/core';

function Step4(props){
  if (props.currentStep !== 4) { 
    return null
  }

  const { images, handleChange } = props;

  return(
    <Container style={{marginTop: "1rem"}}>
      <Typography variant="subtitle1">U ovom koraku postavite lokaciju na kojoj će se realizirati kampanja.</Typography>
      <TextField
        id="address" 
        name="address"
        style={{marginTop: "1rem" }} 
        label="Unesite adresu"
        onChange={handleChange}
        value={images}
        inputProps={{
          autoComplete: 'off',
        }}
        
      />
    </Container>
  )
}

export default Step4;