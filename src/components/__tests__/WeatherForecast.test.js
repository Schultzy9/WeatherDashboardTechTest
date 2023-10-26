import React from 'react';
import { render } from '@testing-library/react';
import { WeatherForecast } from '../WeatherForecast';
import { TEMPERATURE } from '../../utils/constants';

test('WeatherForecast component renders correctly', () => {
	const cityName = 'Glasgow';
	const forecastData = [
		{
			valid_date: '2023-11-01',
			max_temp: 25,
			min_temp: 15,
			weather: { description: 'Sunny' },
		},
		{
			valid_date: '2023-11-02',
			max_temp: 25,
			min_temp: 15,
			weather: { description: 'Sunny' },
		},
		{
			valid_date: '2023-11-03',
			max_temp: 25,
			min_temp: 15,
			weather: { description: 'Sunny' },
		},
		{
			valid_date: '2023-11-04',
			max_temp: 25,
			min_temp: 15,
			weather: { description: 'Sunny' },
		},
		{
			valid_date: '2023-11-05',
			max_temp: 20,
			min_temp: 10,
			weather: { description: 'Rainy :(' },
		},
	];
	const unit = TEMPERATURE.CELCIUS;

	const { getByText, getAllByText } = render(
		<WeatherForecast cityName={cityName} forecastData={forecastData} unit={unit} />
	);

	expect(getByText('5-Day Forecast for Glasgow')).toBeInTheDocument();

	expect(getByText('Today')).toBeInTheDocument();
	expect(getByText('Tomorrow')).toBeInTheDocument();
	expect(getByText('2023-11-03')).toBeInTheDocument();
	expect(getByText('2023-11-04')).toBeInTheDocument();
	expect(getByText('2023-11-05')).toBeInTheDocument();

	expect(getAllByText('Max: 25°C')).toHaveLength(4);
	expect(getByText('Max: 20°C')).toBeInTheDocument();

	expect(getAllByText('Min: 15°C')).toHaveLength(4);
	expect(getByText('Min: 10°C')).toBeInTheDocument();

	expect(getAllByText('Sunny')).toHaveLength(4);
	expect(getByText('Rainy :(')).toBeInTheDocument();

});
