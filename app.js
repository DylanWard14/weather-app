const request = require('request');
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forcast"); 

geocode('Boston', (error, data) => {
    console.log("Error: ", error);
    console.log("Data ", data);
})



forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })