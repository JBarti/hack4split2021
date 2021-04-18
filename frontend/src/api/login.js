class Login {
	static async login({email, password}) {
		const response = await fetch('/api/login', {
			method: "POST",
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			headers: {"Content-Type": "application/json"}
		})

		return response.json()
	}
}

export default Login;
