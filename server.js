// Require our dependencies
var express = require('express'),
  http = require('http'),
  pg = require('pg'),
  q = require('q'),
  fs = require('fs'),
  bodyParser = require('body-parser');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 3000;

// Disable etag headers on responses
app.disable('etag');

app.use(bodyParser());

app.use("/", express.static(__dirname + "/public/"));

var loadRecycleBinData = function(path) {
  var data = JSON.parse( fs.readFileSync(path, 'utf8') );

  return data['data'].map(function(row) {
    return {
      borough: row[8],
      sitetype: row[9],
      name: row[10],
      address: row[11],
      latitude: row[12],
      longitude: row[13]
    };
  });
};

app.get('/neighborhoods', function(req, res, next) {
  neighborhoodGeoJson = fs.readFileSync("data/nyc-neighborhoods.geojson");

  res.setHeader('content-type', 'application/json');
  res.status(200).send(neighborhoodGeoJson);
});

app.get('/bins', function(req, res, next) {
  var recycleBins = loadRecycleBinData("data/public_recycling_bins.json");

  res.setHeader('content-type', 'application/json');
  res.status(200).send({data: recycleBins});
});

// Fire it up (start our server)
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});
