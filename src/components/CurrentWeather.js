import { formatTemperature } from "../utils/formatTemperature"

export const CurrentWeather = ({weatherData, unit}) => {
	return (
		<div>
			<h2>Current Weather in {weatherData.city_name}</h2>
			<p>Temperature: {formatTemperature(weatherData.temp, unit)}</p>
			<p>Humidity: {weatherData.rh}%</p>
			<p>Wind Speed: {weatherData.wind_spd} m/s</p>
		</div>
	)
}