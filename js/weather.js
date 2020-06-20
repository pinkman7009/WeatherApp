export default class Weather {
	constructor() {
		this.API_KEY = '7bc7395fa3f3469165e343840e342a65';
	}
	async get(cityName) {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.API_KEY}`
		);

		const weatherData = await response.json();

		return weatherData;
	}
}
