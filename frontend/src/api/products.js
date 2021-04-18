export default class Products {
	static async search({search_term, lat, long}) {
		const response = await fetch(`/api/products?search_term={search_term}&lat={lat}&long={long}`)

		return response.json()
	}
}
