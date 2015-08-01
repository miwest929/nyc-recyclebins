var shouldDisplayMarkers = true;

var graph = generateGraph();
graph.colorGraph(4);

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

var neighborhoods = [];
$.get('/neighborhoods', function(data, status) {
  var getStyle = function(color) {
    return {
      "color": color,
      "weight": 5,
      "opacity": 0.2
    };
  };

  var bronxStyle = getStyle("#cc33ff");
  var brooklynStyle = getStyle("#0078ff");
  var manhattanStyle = getStyle("#339966");
  var queensStyle = getStyle("#f0f00b");
  var statenIslandStyle = getStyle("#cc3300");

  var getNeighborhood = function(lat, lng, neighborhoods) {
    // TODO: Implement me. Will use a Quadtree data structure to provide
    //       range queries. Find a description of the algorithm at:
    //       http://www.cs.umd.edu/~meesh/420/Notes/PMQuadtree/pm_quadtree_samet.pdf
  };

  var getColorized = function(colorIndex) {
    var colorStyle = ["#339966", "#0078ff", "#cc33ff", "#f0f00b", "#cc3300"];
    return getStyle( colorStyle[colorIndex] );
  };

  var neighborhoodLayer = L.geoJson(data, {
    onEachFeature: function (feature, layer) {
      neighborhoods.push(feature);
      //layer.bindPopup(feature.properties.neighborhood);
    },
    style: function(feature) {
      switch(feature.properties.borough) {
        case 'Bronx':
          var node = graph.findNode(feature.properties.neighborhood);

          if (node !== undefined) {
            return getColorized(node.attrs.color);
          } else {
            console.log(`Couldn't find a node for ${feature.properties.neighborhood}. Using default styling.`);
            return bronxStyle;
          }
        case 'Brooklyn':
          var node = graph.findNode(feature.properties.neighborhood);

          if (node !== undefined) {
            return getColorized(node.attrs.color);
          } else {
            console.log(`Couldn't find a node for ${feature.properties.neighborhood}. Using default styling.`);
            return brooklynStyle;
          }
        case 'Manhattan':
          var node = graph.findNode(feature.properties.neighborhood);

          if (node !== undefined) {
            return getColorized(node.attrs.color);
          }
          else {
            console.log(`Couldn't find a node for ${feature.properties.neighborhood}. Using default styling.`);
            return manhattanStyle;
          }
        case 'Queens': return queensStyle;
        case 'Staten Island': return statenIslandStyle;
      }
    }
  }).addTo(map);

  var source = null;
  neighborhoodLayer.on("click", function (e) {
    if (source === null) {
      source = e.layer.feature.properties.neighborhood;
    }
    else {
      var destination = e.layer.feature.properties.neighborhood;
      console.log(`graph.addEdge('${source}', '${destination}');`);
      source = null;
    }
  });
});

// Retrieve and render the recycle bin markers
if (shouldDisplayMarkers === true) {
  $.get("/bins", function(data, status) {
    var binMarkers = [];
    data['data'].forEach(function(bin) {
      if (bin['latitude'] !== null && bin['longitude'] !== null) {
        var marker = L.marker([bin['latitude'], bin['longitude']], {icon: recycleMarker});
        marker.addTo(map)
              .bindPopup( `${bin['name']} / ${bin['address']}` );
      } else {
        console.log( `Couldn't retrieve the coordinates for the recycle bin at '${bin['name']}'.` );
      }
    });
  });
}
