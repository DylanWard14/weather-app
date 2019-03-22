const request = require('request');
const geocode = require("./utils/geocode.js");

// const url = 'https://api.darksky.net/forecast/e62bc01ae7408eb71df818e7ca37577e/37.8267,-122.4233?units=si';

// request({ url: url, json: true }, (error, response) => {
//     if (error)
//     {
//         console.log("Unable to connect with weather service!");
//     }
//     else if (response.body.error)
//     {
//         console.log("unable to find location");
//     }
//     else
//     {
//         console.log("The temperature is currently: " + response.body.currently.temperature + " degrees. There is a " + response.body.currently.precipProbability + "% chance of rain.");
//     }
    
// })

geocode('Boston', (error, data) => {
    console.log("Error: ", error);
    console.log("Data ", data);
})