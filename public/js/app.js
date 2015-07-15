var map = L.map('map').setView([40.7127, -74.0059], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mpwest929.cdc89604',
    accessToken: 'pk.eyJ1IjoibXB3ZXN0OTI5IiwiYSI6IjkzYzUxMTY4NTQ5NzEzOWY3NWU1MWY3YzNiMTUwMGIxIn0.j5Pp4ifPG1I4ZIMaGtKtqA'
}).addTo(map);

var recycleMarker = L.AwesomeMarkers.icon({
  icon: 'recycle',
  prefix: 'fa',
  markerColor: 'green'
});

$.get("/bins", function(data, status) {
  data['data'].forEach(function(bin) {
    L.marker([bin['latitude'], bin['longitude']], {icon: recycleMarker})
     .addTo(map)
     .bindPopup( bin['name'] + " / " + bin['address'] );
  });
});
