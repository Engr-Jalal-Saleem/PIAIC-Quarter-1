"use strict";
/**
 * The function describe_city() accepts the name of a city and its country, and prints a sentence
 * stating the city and country.
 * @param {string} [city_name=Islamabad] - The name of the city (default value: "Islamabad").
 * @param {string} [country=Pakistan] - The country parameter is a string that represents the country
 * in which the city is located.
 */
// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. 
// Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city_name = "Islamabad", country = "Pakistan") {
    console.log(`${city_name} is in ${country}.`);
}
describe_city("Karachi");
describe_city("delhi", "India");
