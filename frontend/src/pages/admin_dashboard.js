import { useState } from 'react';
import Navbar from '../components/navbar';
import MediaCard from '../components/card';
import { Container } from '@material-ui/core';
import TransitionModal from '../components/form/modal';
import campaignsData from '../common/campaign';

function App() {
  const [campaigns, setCampaigns] = useState([...campaignsData])

  const onSubmit = (e, childState) => {
    e.preventDefault();

    const newCampaign = {
      name: childState.name,
      creator: "Udruga Most", //Dohvatit iz argumenta rute preko ID-a
      description: childState.description,
      images: childState.images,
      items: childState.items,
      address: childState.address,
      startDate: childState.startDate,
      endDate: childState.endDate,
    }
    setCampaigns([...campaigns, newCampaign]);
  }
  
  return (
    <div>
      <Navbar />
      <Container maxWidth="sm" style={{marginTop:"1rem"}}>
        {campaigns.map(campaign => {
          return <MediaCard key={Math.random()} name={campaign.name} creator={campaign.creator} image={campaign.images[0]}/>
        })}
        <TransitionModal onSubmit={onSubmit}/>
      </Container>
    </div>
  );
}

export default App;
