#!/usr/bin/env node

import axios from 'axios';
import inquirer from 'inquirer';

// Interface to define the structure of the weather response
interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
}

// Function to fetch weather data from the OpenWeatherMap API
function getWeather(city: string): Promise<WeatherResponse> {
  // Replace 'Paste Yout Api Key Here' with your actual OpenWeatherMap API key
  const apiKey = 'Paste Yout Api Key Here';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  // Use Axios to make the API request and return the weather data
  return axios.get(apiUrl).then((response) => response.data);
}

// Function to display weather information
function displayWeather(city: string, weatherData: WeatherResponse): void {
  console.log(`Weather in ${city}:`);
  console.log(`Temperature: ${weatherData.main.temp}°C`);
  console.log(`Humidity: ${weatherData.main.humidity}%`);
  console.log(`Description: ${weatherData.weather[0].description}`);
}

// Function to prompt the user for a city and display weather information
function promptUser(): void {
  inquirer
    .prompt({
      type: 'input',
      name: 'city',
      message: 'Enter the city:',
    })
    .then((answers) => {
      const city = answers.city;
      // Fetch weather data for the entered city
      getWeather(city)
        .then((weatherData) => {
          // Display weather information
          displayWeather(city, weatherData);
        })
        .catch((error) => {
          // Handle errors when fetching weather data
          console.error('Error fetching weather data:', error.message);
        })
        .finally(() => {
          // Ask the user for another city
          promptUser();
        });
    });
}

// Main program - initiate the process by prompting the user for the first city
promptUser();
