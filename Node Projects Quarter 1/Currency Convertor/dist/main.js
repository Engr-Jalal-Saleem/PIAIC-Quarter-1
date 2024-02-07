#!/usr/bin/env node
import inquirer from 'inquirer';
// Define exchange rates
const exchangeRates = {
    USD: 1.0,
    EUR: 0.82,
    GBP: 0.73,
    INR: 73.0,
    AUD: 1.29,
    CAD: 1.27,
    SGD: 1.34,
    CHF: 0.89,
    MYR: 4.05,
    PKR: 160.0,
    JPY: 103.0,
    CNY: 6.46,
};
// Function to perform currency conversion
function convertCurrency(amount, fromCurrency, toCurrency) {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    if (!fromRate || !toRate) {
        throw new Error('Invalid currency');
    }
    return (amount / fromRate) * toRate;
}
// Main function
async function main() {
    // Get user input
    const { amount, fromCurrency, toCurrency } = await inquirer.prompt([
        {
            type: 'number',
            name: 'amount',
            message: 'Enter amount:',
        },
        {
            type: 'list',
            name: 'fromCurrency',
            message: 'Convert from:',
            choices: Object.keys(exchangeRates),
        },
        {
            type: 'list',
            name: 'toCurrency',
            message: 'Convert to:',
            choices: Object.keys(exchangeRates),
        },
    ]);
    // Perform currency conversion
    const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);
    // Display result
    console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
}
// Start the program
main();
