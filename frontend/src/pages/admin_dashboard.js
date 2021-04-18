import { useState } from 'react';
import MediaCard from '../components/card';
import { Container } from '@material-ui/core';
import TransitionModal from '../components/form/modal';
import campaignsData from '../common/campaign';
import { Link } from 'react-router-dom'

function AdminDashboard() {
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
      <Container maxWidth="sm" style={{marginTop:"1rem"}}>
        {campaigns.map(campaign => {
          return(
            <Link to="/campaign/1" style={{textDecoration: "none"}}>
              <MediaCard key={Math.random()} name={campaign.name} creator={campaign.creator} image={campaign.images[0]}/>
            </Link>
          )
        })}
        <TransitionModal onSubmit={onSubmit}/>
      </Container>
    </div>
  );
}

export default AdminDashboard;
