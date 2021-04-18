export default class Campaign {
	static async create(
		{date_from,
			date_to,
			name,
			goals, // Array[{product_id, product_count}]
			delivery_lat,
			delivery_lon,
			location,
			slideshow_data, /* {
						"description": "string",
						"image_urls": [
							"string"
						],
						"title": "string"
						}, */
			tags} // Array[string]
	) {
		const response = await fetch("/api/campaign", 
			{
				method: "POST",
				body: JSON.stringify({
					date_from: date_from,
					date_to: date_to,
					goals: goals,
					location: location,
					lat: delivery_lat,
					long: delivery_lon,
					name: name,
					slideshow_data: slideshow_data,
					tags: tags,
				}),
				headers: {"Content-Type": "application/json"}
			})

		return response.json()
	}

	static async donate({campaign_id, donations, location}) {
		/*
		 * {
			"campaign_id": "string",
				"donations": [
					{
						"donated": 0,
						"id": "string"
					}
				],
				"location": "string"
			}
		*/
		const response = await fetch('/api/campaign/donate', {
			method: "POST",
			body: JSON.stringify({
				campaign_id: campaign_id,
				donations: donations,
				location: location,
			}),
			headers: {"Content-Type": "application/json"}
		})

		return response.json()
	}

	static async get({campaign_id}) {
		const response = await fetch(`/api/campaign?campaign_id={campaign_id}`)

		return response.json()
	}
}
