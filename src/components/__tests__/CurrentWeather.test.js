import React from 'react';
import { render } from '@testing-library/react';
import { CurrentWeather } from '../CurrentWeather';
import { TEMPERATURE } from '../../utils/constants';

test('CurrentWeather component renders correctly', () => {
	const weatherData = {
		city_name: 'Glasgow',
		temp: 25,
		rh: 50,
		wind_spd: 5,
	};
	const unit = TEMPERATURE.CELCIUS;

	const { getByText } = render(<CurrentWeather weatherData={weatherData} unit={unit} />);

	expect(getByText(`Current Weather in Glasgow`)).toBeInTheDocument();
	expect(getByText(`Temperature: 25°C`)).toBeInTheDocument();
	expect(getByText(`Humidity: 50%`)).toBeInTheDocument();
	expect(getByText(`Wind Speed: 5 m/s`)).toBeInTheDocument();
});
