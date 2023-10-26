# Weather Dashboard - Technical test

## by Matthew Schultz ##

## API key ##

This project requires an API key for the [Weatherbit API](https://www.weatherbit.io/). To add the API key just update the empty string in the constants.js file.

## Notes on current iteration

At the moment there are two API calls made on button click - a call to get the current weather and a call to get the forecast. I have decided to make the two calls at once for the beneifit of the user to see all the information in a single button click in this single page application. Depending on the situation and the usage in a future iteration this could be split to save uneccesary API calls.

## Future improvements ##

Here are a few improvements that could be made to this project with a little more time.

I have added some simple unit tests for now but the next step would be to add some tests for the WeatherDashboard component to test the API calls.

I would look to cache the response from the API in the service layer or the front-end to reduce the API calls.

I would also consider adding Typescript, especially as the project grows. 
