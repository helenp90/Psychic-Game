var geocoder = require('geocoder');

// Geocoding 
geocoder.geocode("Atlanta, GA", function ( err, data ) {
 // do something with data 
});

var Address = process.argv[2]