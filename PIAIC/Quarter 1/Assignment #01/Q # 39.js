"use strict";
/**
 * The function city_country takes in the name of a city and its country and returns a string formatted
 * as "city_name, country".
 * @param {string} city_name - The name of the city, which is a string.
 * @param {string} country - The country parameter is a string that represents the name of the country
 * where the city is located.
 * @returns a string formatted as "city_name, country".
 */
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city_name, country) {
    return `${city_name}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
