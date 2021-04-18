import { useEffect, useState } from 'react';
import MediaCard from '../components/card';
import { Container } from '@material-ui/core';
import TransitionModal from '../components/form/modal';
import campaignsData from '../common/campaign';
import { Link } from 'react-router-dom'
import { Campaign, Organisation, Login } from '../api'
import Geocode from 'react-geocode'
import { Fragment, } from 'react';
import PreviewCard from '../components/previewCard';
import ProgressBar from '../components/progressBar';
import ItemPreview from '../components/itemPreview';

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


		Campaign.create({
			date_from: "2021-04-22",
			date_to: "2021-04-25",
			name: "Prikupljanje pomoci za socijalnu samoposlugu",
			delivery_lat: 43.518088,
			delivery_lon: 16.4501848,
			location: "Varazdinska 34, Split",
			goals: [{id: 1727916576, goal: 20 }, {id: 1727916580, goal: 30 }],
			slideshow_data: {
				description: `
				Socijalna samoposluga "SolidarnoST" Split, namijenjena je beskućnicima, osobama u riziku od beskućništva, osobama koji borave u neadekvatnim uvjetima i samačkim domaćinstvima sa područja grada Splita i okolice.
Inicijator: Udruga MoSt, licencirami posrednik u doniranju hrane.
				`,
				image_urls: ["https://i.picsum.photos/id/566/600/300.jpg?hmac=u3rRsOK6ON_fQS7nnthvw1cr9elzz0hvUz7kMKAcOS4"],
				title: "Socijalna samoposluga",
			},
			tags: ["socijalna", "samoposluga", "beskucnici"]
		})

	}

	useEffect(() => {
		Login.login({email: "udruga@most.hr", password: "udrugamost"}).then(() => {
			Organisation.get({organisation_id: "sLVeViy7EBb1yGjfS5es"})
				.then(response_org => {
					Campaign.get({campaign_id: "KpuWAviUr53dECIUwO6B"}).then(resp_campaign => {
						console.log("PICKA MILE MATERE")
						console.log(response_org)
						console.log(resp_campaign);
						let new_campaign = {
							name: "Udruga Most",
							creator: "Udruga",
							description: resp_campaign.slideshow.description,
							images: ["https://lh3.googleusercontent.com/proxy/iKasGcLZao8TMvNNmOY9JCKM7NGJ86Jvd1xecNAxF8zDSypuhC9lZ6oHwureifCIeGX0r6RjGXLDXCAoC0HDjW4nEHKKZG5qiT9RmY5ctxC8p2-ABqrk7Jw"],
							items: resp_campaign.goals,
							address: resp_campaign.location,
							startDate: resp_campaign.date_from,
							endDate: resp_campaign.date_to,
						}
						setCampaigns([new_campaign])
					})
				})
		})
	}, [])

	return (
		<div>
		<Container maxWidth="sm" style={{marginTop:"1rem"}}>
		{campaigns.map(campaign => {
			return(
				<Link to="/api/qr?organisation_id=0R6X5abEU7Gaiz1CXQbt&location=varazdinska34Split" style={{textDecoration: "none"}}>
				<MediaCard key={Math.random()} name={campaign.name} creator={campaign.creator} image={campaign.images[0]}/>
				</Link>
			)
		})}
		<TransitionModal onSubmit={onSubmit}/>
		<CampaignStvar />
		<ItemPreview
			name="Voda Gaz 1.5L"
			current={10}
			total={50}
			alt="alt"
			src="https://i.postimg.cc/JhGnKYP1/3859888152045.png"
		/>
		<ItemPreview
			name="Tuna Masl.Ulja"
			current={13}
			total={50}
			alt="alt"
			src="https://i.postimg.cc/jLgrgqmd/8004030100213.png"
		/>
		<ItemPreview
			name="Jaja L razred"
			current={10}
			total={60}
			alt="alt"
			src="https://res.cloudinary.com/glovoapp/f_auto,q_auto/Products/1695188450"
		/>
		</Container>
		</div>
	);
}

function CampaignStvar(){
  const [campaign, setCampaign] = useState({});

  return(
    <Fragment>
        <PreviewCard 
          image="https://static.slobodnadalmacija.hr/Archive/Images/2016/09/15/socijala.JPG" 
          name="Prikupljanje pomoci za socijalnu samoposlugu" 
          endDate="2021-08-01"
          address="Varazdinska 34, Split"
	  description="Socijalna samoposluga SolidarnoST Split, namijenjena je beskućnicima, osobama u riziku od beskućništva, osobama koji borave u neadekvatnim uvjetima i samačkim domaćinstvima sa područja grada Splita i okolice.  Inicijator: Udruga MoSt, licencirami posrednik u doniranju hrane."
	  >
          <ProgressBar value={20} />
        </PreviewCard>
    </Fragment>
  );
}

export default AdminDashboard;


