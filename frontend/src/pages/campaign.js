import { Fragment, useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import PreviewCard from '../components/previewCard';
import ProgressBar from '../components/progressBar';

function Campaign(){
  const [campaign, setCampaign] = useState({});

  return(
    <Fragment>
      <Container>
        <PreviewCard 
          image="https://picsum.photos/300/200" 
          name="" 
          endDate="2021-08-01"
          address=""
          description=""
        >
          <ProgressBar value={20} />
        </PreviewCard>
      </Container>
    </Fragment>
  );
}

export default Campaign;
