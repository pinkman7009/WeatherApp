import Weather from './weather.js';
import UI from './ui.js';

const weather = new Weather();
const ui = new UI();

// Modal Logic
const change_loc_btn = document.querySelector('#change-loc');
const modal = document.querySelector('.modal-bg');
const close = document.querySelector('.close');
const err = document.querySelector('.error');
change_loc_btn.addEventListener('click', () => {
	// To clear the Modal Input values and Errors if any
	document.querySelector('#city-name').value = '';
	document.querySelector('#state-name').value = '';
	if (err) err.style.display = 'none';

	// To add the modal active class
	modal.classList.add('modal-bg-active');

	const check_weather_btn = document.querySelector('#check-weather');

	document.addEventListener('click', (e) => {
		if (e.target.className.includes('modal-bg')) modal.classList.remove('modal-bg-active');
	});
	check_weather_btn.addEventListener('click', () => {
		const cityName = document.querySelector('#city-name').value;
		const stateName = document.querySelector('#state-name').value;
		const err_alt = document.querySelector('.error');
		// if (err_alt !== null) ui.showAlert('Enter valid data', 'error');
		if (cityName === '' || stateName === '') ui.showAlert('Please enter all fields', 'error');
		else {
			getUserData(cityName, stateName);

			modal.classList.remove('modal-bg-active');
			// 	else ui.showAlert('Enter valid data', 'error');
			// }
		}
	});
});

close.addEventListener('click', () => {
	modal.classList.remove('modal-bg-active');
});

const getUserData = (cityName, stateName) => {
	let flag = true;
	weather.get(cityName).then((weatherData) => {
		if (weatherData.message === 'city not found') {
			flag = false;
		} else ui.showUI(weatherData);
	});
};

// On Load
// document.addEventListener('DOMContentLoaded', () => {
// 	modal.classList.add('modal-bg-active');
// });
