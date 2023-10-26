import React, { useState } from 'react';
import { TEMPERATURE } from '../utils/constants';
import { CurrentWeather } from './CurrentWeather';
import { WeatherForecast } from './WeatherForecast';
import { fetchWeatherForecast } from '../api/fetchWeatherForecast';
import { fetchCurrentWeather } from '../api/fetchCurrentWeather';

const WeatherDashboard = () => {
	const [city, setCity] = useState('');
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecast, setForecast] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [selectedUnit, setSelectedUnit] = useState(TEMPERATURE.CELCIUS);

	const getCurrentWeather = async () => {
		try {
			setLoading(true);
			setForecast(null)

			const response = await fetchCurrentWeather(city);
			const currentData = response.data[0];

			if (currentData.city_name === undefined) {
				setError(errorMessageCurrentWeather(city));
			} else {
				setCurrentWeather(currentData);
				setError(null)
			}

			setLoading(false);
		} catch (err) {
			setError(errorMessageCurrentWeather(city));
			setLoading(false);
		}
	};

	const getWeatherForecast = async () => {
		try {
			setLoading(true);
			const response = await fetchWeatherForecast(city);      
			const forecastData = response.data;

			setForecast(forecastData);
			setLoading(false);
		} catch (err) {
			setError('Forecast data not available');
			setLoading(false);
		}
	};

	const handleSearchClick = () => {
		getCurrentWeather();
		getWeatherForecast();
	};

	const toggleUnit = () => {
		setSelectedUnit(selectedUnit === TEMPERATURE.CELCIUS ? TEMPERATURE.FARENHEIT : TEMPERATURE.CELCIUS);
	};

	const errorMessageCurrentWeather = (city) => {
		return `Unable to find weather data for ${city}`;
	};

	return (
		<div>
			<h1>WEATHER DASHBOARD</h1>
			<p>Please select a city to see the current weather conditions</p>

			<div className='d-flex flex-column align-items-center'>
				<div className='container' style={{ maxWidth: '400px' }}>
					<div className='input-group mb-3'>
						<input
							type='text'
							className='form-control'
							placeholder='Enter city name'
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						<div className='input-group-append'>
							<button onClick={handleSearchClick} className='btn btn-primary'>
								Search
							</button>
						</div>
					</div>
				</div>
			</div>

			{loading && 
				<div className="text-center">
					<div className="spinner-border text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<p>Loading...</p>
				</div>
			}

			{error && <div>{error}</div>}

			{currentWeather && !error && (
				<CurrentWeather weatherData={currentWeather} unit={selectedUnit} />
			)}

			{forecast && currentWeather && (
				<WeatherForecast forecastData={forecast} cityName={currentWeather.city_name} unit={selectedUnit} />
			)}

			<div className="d-flex justify-content-center">
				<div className="form-check form-switch">
					<input
						type="checkbox"
						className="form-check-input"
						id="temperatureToggle"
						checked={selectedUnit === TEMPERATURE.FARENHEIT}
						onChange={toggleUnit}
					/>
					<label className="form-check-label" htmlFor="temperatureToggle">
						{selectedUnit === TEMPERATURE.FARENHEIT ? '°F' : '°C'}
					</label>
				</div>
			</div>
		</div>
	);
};

export default WeatherDashboard;
