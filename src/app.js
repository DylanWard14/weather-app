const path = require ('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: "Dylan Ward"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Dylan Ward'

    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help', 
        helpText: 'This is some helpful text',
        name: "Dylan Ward"
    });
})

app.get('/weather', (req, res) => {
    if (!req.query.address)
    {
        return res.send({
            error: "You must provide a search term!"
        });
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {})=> {
        if(error)
        {
            return res.send({error});
        }
        forcast(latitude, longitude, (error, forcastData) => {
            if (error)
            {
                return res.send({error});
            }
            return res.send({
                forcast: forcastData,
                location,
                address: req.query.address
            })
        })

    })
})

app.get('/products', (req, res) => {

    if(!req.query.search)
    {
        return res.send({
            error: "You must provide a search term"
        })
    }
    res.send({
        products: []
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Dylan Ward',
        errorMessage: "Help article not found"
    });
})

app.get("*", (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Dylan Ward',
        errorMessage: "404 page not found"
    });
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})