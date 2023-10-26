import { TEMPERATURE } from "./constants";

export const formatTemperature = (temp, unit) => {
	/* API can return the farenheit or celcius but I've opted to do this manually rather than doing another API call */
	if (unit === TEMPERATURE.FARENHEIT) {
		const tempInFahrenheit = (temp * 9/5 + 32).toFixed(2);
		return `${tempInFahrenheit}°F`;
	  } else {
		return `${temp}°C`;
	  }
}