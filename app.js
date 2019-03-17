const request = require('request');

const url = 'https://api.darksky.net/forecast/e62bc01ae7408eb71df818e7ca37577e/37.8267,-122.4233?units=si';

request({ url: url, json: true }, (error, response) => {
    if (error)
    {
        console.log("Unable to connect with weather service!");
    }
    else if (response.body.error)
    {
        console.log("unable to find location");
    }
    else
    {
        console.log("The temperature is currently: " + response.body.currently.temperature + " degrees. There is a " + response.body.currently.precipProbability + "% chance of rain.");
    }
    
})


// Geocoding
const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGltaWRhdSIsImEiOiJjanRjN2MzYXkwdHAwNDNwOWJ4MTNwb2J5In0.iJPDwwtzxslTad-Yd_rpDQ";

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error)
    {
        console.log("Unable to connect with geocode service!");
    }
    else if (response.body.features.length === 0)
    {
        console.log("unable to find location");
    }
    else
    {
        console.log(response.body.features[0].center[0] + " " + response.body.features[0].center[1]);
    }

})