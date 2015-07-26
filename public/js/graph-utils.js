// TODO: Implement automatic graph construction algorithm
/*var buildGraph = function(features) {
  var neighborhoodGraph = new Graph();

  var nodeLineSegments = []
  features.forEach(function (feature) {
    neighborhoodGraph.node_list.push( new Node(feature.properties.neighborhood) );

    // First element of the Linear Ring represents the exterior ring. Subsequent
    // rings represent interior rings (eg: holes)
    var exteriorLinearRing = feature.geometry.coordinates[0];
    console.log(`Vertices for ${feature.properties.neighborhood} are ${exteriorLinearRing}`);
    //exteriorLinearRing.forEach(function (vertex) {

    //});
  });
};*/

var generateGraph = function() {
  var graph = new Graph();

/*  neighborhoods.forEach(function(hood) {
    if (hood.properties.borough === "Manhattan") {
      var newNode = new Node(hood.properties.neighborhood, {feature: hood});
      graph.node_list.push(newNode);
    }
  });*/

  graph.addEdge('Financial District', 'Battery Park City');
  graph.addEdge('Financial District', 'Tribeca');
  graph.addEdge('Financial District', 'Civic Center');
  graph.addEdge('Financial District', 'Two Bridges');

  graph.addEdge('Battery Park City', 'Tribeca');

  graph.addEdge('Tribeca', 'Civic Center');
  graph.addEdge('Tribeca', 'Chinatown');
  graph.addEdge('Tribeca', 'SoHo');

  graph.addEdge('Civic Center', 'Chinatown');
  graph.addEdge('Civic Center', 'Two Bridges');

  graph.addEdge('Two Bridges', 'Lower East Side');
  graph.addEdge('Two Bridges', 'Chinatown');

  graph.addEdge('Chinatown', 'Little Italy');
  graph.addEdge('Chinatown', 'Lower East Side');

  graph.addEdge('Lower East Side', 'East Village');
  graph.addEdge('Lower East Side', 'Nolita');
  graph.addEdge('Lower East Side', 'Little Italy');

  graph.addEdge('Nolita', 'SoHo');
  graph.addEdge('Nolita', 'NoHo');

  graph.addEdge('East Village', 'NoHo');
  graph.addEdge('East Village', 'Greenwich Village');
  graph.addEdge('East Village', 'Stuyvesant Town');
  graph.addEdge('East Village', 'Gramercy');

  graph.addEdge('NoHo', 'Greenwich Village');

  graph.addEdge('SoHo', 'West Village');
  graph.addEdge('SoHo', 'Greenwich Village');

  graph.addEdge('Greenwich Village', 'West Village');
  graph.addEdge('Greenwich Village', 'Chelsea');
  graph.addEdge('Greenwich Village', 'Gramercy');

  graph.addEdge('West Village', 'Chelsea');

  graph.addEdge('Gramercy', 'Stuyvesant Town');
  graph.addEdge('Gramercy', 'Chelsea');
  graph.addEdge('Gramercy', 'Kips Bay');
  graph.addEdge('Gramercy', 'Flatiron District');

  graph.addEdge('Stuyvesant Town', 'Kips Bay');

  graph.addEdge('Flatiron District', 'Kips Bay');
  graph.addEdge('Flatiron District', 'Chelsea');
  graph.addEdge('Flatiron District', 'Midtown');

  graph.addEdge('Chelsea', 'Midtown');
  graph.addEdge('Chelsea', "Hell's Kitchen");

  graph.addEdge('Kips Bay', 'Midtown');
  graph.addEdge('Kips Bay', 'Murray Hill');

  graph.addEdge('Midtown', 'Murray Hill');
  graph.addEdge('Midtown', 'Theater District');
  graph.addEdge('Midtown', "Hell's Kitchen");
  graph.addEdge('Midtown', 'Central Park');
  graph.addEdge('Midtown', 'Upper East Side');
  graph.addEdge('Midtown', 'Upper West Side');

  graph.addEdge("Hell's Kitchen", 'Upper West Side');

  graph.addEdge('Upper West Side', 'Central Park');
  graph.addEdge('Upper West Side', 'Morningside Heights');
  graph.addEdge('Upper West Side', 'Harlem');

  graph.addEdge('Upper East Side', 'Central Park');
  graph.addEdge('Upper East Side', 'East Harlem');

  graph.addEdge('East Harlem', 'Harlem');
  graph.addEdge('East Harlem', 'Central Park');

  graph.addEdge('Harlem', 'Morningside Heights');
  graph.addEdge('Harlem', 'Washington Heights');

  graph.addEdge('Washington Heights', 'Inwood');

  return graph;
};
