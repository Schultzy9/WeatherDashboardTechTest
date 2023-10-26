import { formatTemperature } from "../utils/formatTemperature"

export const WeatherForecast = ({cityName, forecastData, unit}) => {
	return (
		<div className="container">
			<h2 className="text-center">5-Day Forecast for {cityName}</h2>
			<div className='d-flex flex-wrap justify-content-center'>
				{forecastData.slice(0, 5).map((day, index) => (
					<div key={index} className='card m-2' style={{ width: '10rem' }}>
						<div className='card-body'>
							{index === 0 ? (
								<h5 className='card-title'>Today</h5>
							) : index === 1 ? (
								<h5 className='card-title'>Tomorrow</h5>
							) : (
								<h5 className='card-title'>{day.valid_date}</h5>
							)}
							<p className='card-text'>
								{`Max: ${formatTemperature(day.max_temp, unit)}`}
							</p>
							<p className='card-text'>
								{`Min: ${formatTemperature(day.min_temp, unit)}`}
							</p>
							<p className='card-text'>
								{day.weather.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}