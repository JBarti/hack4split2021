export default class Organisation {
	static async get({organisation_id}) {
		const response = await fetch(`/api/organisation?organisation_id=${organisation_id}`)
		
		return response.json()
	}

	static async register({email, organisation_name, password}) {
		const response = await fetch(
			'/api/organisation/register',
			{
				method: "POST",
				body: JSON.stringify(
					{
						email: email,
						organisation_name: organisation_name,
						password: password,
					}
				),
				headers: {"Content-Type": "application/json"}
			}
		)

		return response.json()
	}
}
