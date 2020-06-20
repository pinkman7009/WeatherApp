export default class UI {
	constructor() {
		this.modal = document.querySelector('.modal');
		this.weather_stats = document.querySelector('#weather-stats');
		this.location = document.querySelector('#location');
		this.temp_kind = document.querySelector('#temperature-kind');
		this.weather_img = document.querySelector('#weather-type');
		this.rel_hum = document.querySelector('#rel-hum');
		this.feels_like = document.querySelector('#feels-like');
		this.max_temp = document.querySelector('#max-temp');
		this.min_temp = document.querySelector('#min-temp');
	}
	showUI(weatherData) {
		this.weather_stats.style.display = 'block';
		this.location.innerText = weatherData.name + ', ' + weatherData.sys.country;
		this.temp_kind.innerText = weatherData.weather[0].main;
		this.weather_img.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);

		this.rel_hum.innerText = `Relative Humidity : ${weatherData.main.humidity}%`;
		this.feels_like.innerText = `Feels Like : ${this.convert(weatherData.main.feels_like).toPrecision(2)}℃`;
		this.max_temp.innerText = `Max Temp : ${this.convert(weatherData.main.temp_max).toPrecision(2)}℃`;
		this.min_temp.innerText = `Min Temp : ${this.convert(weatherData.main.temp_min).toPrecision(2)}℃`;
	}
	convert(weatherInK) {
		return weatherInK - 273.15;
	}
	showAlert(message, error) {
		const err = document.querySelector('.error');
		if (err) err.remove();
		const div = document.createElement('div');

		div.classList.add(error);
		div.innerText = message;

		this.modal.prepend(div);
	}
}
