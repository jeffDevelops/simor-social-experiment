/* jshint esversion: 6 */
//REQUIRE DEPENDENCIES
const express         = require('express'),
      app             = express(),
      port            = process.env.PORT || 3000,
      bodyParser      = require('body-parser'),
      path            = require('path'),
      ejs             = require('ejs'),
      morgan          = require('morgan'),
      methodOverride  = require('method-override');

//REQUEST/STATUS CODE TOOLING
app.use(morgan('dev'));

//VIEW ENGINE CONFIG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//REQUEST BODY PARSING AND HTTP METHOD OVERRIDE
app.use(bodyParser.json()); //For incoming JSON data

app.use(bodyParser.urlencoded({extended: true})); //For url params and query strings
app.use(methodOverride('_method')); //Override HTML form methods with PUT and DELETE

//SERVE CLIENT-SIDE FILES VIA PUBLIC DIRECTORY
app.use(express.static('public'));

//ROUTES CONFIG
const routes = require('./routes/routes');
app.use(routes);

//START SERVER AND LISTEN ON PORT
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});









