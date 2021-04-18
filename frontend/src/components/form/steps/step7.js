import { Typography, Container } from '@material-ui/core';
import PreviewCard from '../previewCard';

function Step7(props){
  if (props.currentStep !== 7) { 
    return null
  }

  const { campaign, handleChange } = props;

  return(
    <Container style={{marginTop: "1rem"}}>
      <Typography variant="subtitle1">Čestitamo, uspješno ste kreirali kampanju.</Typography>
      <PreviewCard 
        name={campaign.name}
        endDate={campaign.endDate}
        description={campaign.description}
        address={campaign.address}
        image={campaign.images[0]}
      />
    </Container>
  )
}

export default Step7;