import { Typography, Container, TextField } from '@material-ui/core';

function Step1(props){
  if (props.currentStep !== 1) { 
    return null
  }

  const { name, handleChange, userName } = props;

  return(
    <Container style={{marginTop: "1rem"}}>
      <Typography variant="h6">Pozdrav {userName}. <br /> Dobrodošli u kreiranje svoje nove kampanje!</Typography>
      <Typography variant="subtitle1">Započnimo s dodavanjem imena kampanje.</Typography>
      <TextField 
        id="name" 
        name="name" 
        style={{marginTop: "1rem"}} 
        label="Unesite ime kampanje"
        onChange={handleChange}
        value={name}
        inputProps={{
          autoComplete: 'off',
        }}
      />
    </Container>
  )
}

export default Step1;