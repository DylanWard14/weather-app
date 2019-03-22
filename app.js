const request = require('request');
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forcast"); 

const address = process.argv[2];

if(!address)
{
    console.log("Please provide an address");
}
else
{
    geocode(address, (error, data) => {
        if(error)
        {
            return console.log(error);
        }
        forecast(data.latitude, data.longitude, (error, forcastData) => {
            if(error)
            {
                return console.log(error);
            }

            console.log(data.location);
            console.log(forcastData);
        })
    })
}
