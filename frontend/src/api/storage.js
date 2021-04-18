class Storage {
	static async saveImage(image) {
		let form = new FormData()
		form.append("image", image)
		const response = await fetch("/api/image", {
			method: "POST",
			body: form,
		})

		return response.json()
	}
}
