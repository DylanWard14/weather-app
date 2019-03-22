const request = require("request");

const forcast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/e62bc01ae7408eb71df818e7ca37577e/"+ latitude + ","+ longitude +"?units=si";
    request({url: url, json: true}, (error, response) => {
        if (error)
        {
            callback("Unable to connect to weather services!", undefined);
        }
        else if (response.body.error)
        {
            callback("Unable to find location. Try another search.", undefined);
        }
        else
        {
            callback(undefined, {
                summary: response.body.currently.summary,
                temperature: response.body.currently.temperature
            })
        }
    })
}

module.exports = forcast;