import axios from 'axios';
import { apiBaseUrl, apiKey } from "../utils/constants";

export const fetchCurrentWeather = async (city) => {
	const url = apiBaseUrl + '/current';
	try {
		const response = await axios.get(url, {
			params: {
				city: city,
				key: apiKey,
			},
		});

		if(response.status !== 200){
			throw new Error('Something went wrong');
		};

		return await response.data;
	} catch (err) {
		throw err;
	};
};