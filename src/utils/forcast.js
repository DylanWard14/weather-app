const request = require("request");

const forcast = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/e62bc01ae7408eb71df818e7ca37577e/"+ latitude + ","+ longitude +"?units=si";
    request({url, json: true}, (error, {body}) => {
        if (error)
        {
            callback("Unable to connect to weather services!", undefined);
        }
        else if (body.error)
        {
            callback("Unable to find location. Try another search.", undefined);
        }
        else
        {
            callback(undefined, "It is " + body.hourly.summary + " The current temperature is " + body.currently.temperature + "c."
            )
        }
    })
}

module.exports = forcast;