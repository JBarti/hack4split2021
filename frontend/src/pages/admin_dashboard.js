import { useState } from 'react';
import MediaCard from '../components/card';
import { Container } from '@material-ui/core';
import TransitionModal from '../components/form/modal';
import { Link } from 'react-router-dom'
import { Campaign } from '../api';

function AdminDashboard() {
  const [campaigns, setCampaigns] = useState([])

  const onSubmit = (e, childState) => {
    e.preventDefault();

    const newCampaign = {
      name: childState.name,
      slideshow_data: {
        description: childState.description,
        image_urls: childState.images,
      },
      goals: childState.items,
      location: childState.address,
      date_from: childState.startDate,
      date_to: childState.endDate,
      tags: [],
      delivery_lat: 1,
      delivery_lon: 1,
    }
    setCampaigns([...campaigns, newCampaign]);
    Campaign.create(newCampaign)
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
