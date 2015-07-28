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

  // MANHATTAN
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
  graph.addEdge('SoHo', 'Little Italy');

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

  // Brooklyn
  graph.addEdge('DUMBO', 'Vinegar Hill');
  graph.addEdge('DUMBO', 'Brooklyn Heights');
  graph.addEdge('DUMBO', 'Downtown Brooklyn');

  graph.addEdge('Brooklyn Heights', 'Downtown Brooklyn');
  graph.addEdge('Brooklyn Heights', 'Columbia St');
  graph.addEdge('Brooklyn Heights', 'Cobble Hill');
  graph.addEdge('Brooklyn Heights', 'Boerum Hill');

  graph.addEdge('Downtown Brooklyn', 'Vinegar Hill');
  graph.addEdge('Downtown Brooklyn', 'Fort Greene');
  graph.addEdge('Downtown Brooklyn', 'Boerum Hill');

  graph.addEdge('Boerum Hill', 'Fort Greene');
  graph.addEdge('Boerum Hill', 'Cobble Hill');
  graph.addEdge('Boerum Hill', 'Gowanus');
  graph.addEdge('Boerum Hill', 'Carroll Gardens');
  graph.addEdge('Boerum Hill', 'Park Slope');

  graph.addEdge('Cobble Hill', 'Columbia St');
  graph.addEdge('Cobble Hill', 'Carroll Gardens');

  graph.addEdge('Columbia St', 'Carroll Gardens');
  graph.addEdge('Columbia St', 'Red Hook');

  graph.addEdge('Red Hook', 'Carroll Gardens');
  graph.addEdge('Red Hook', 'Gowanus');
  graph.addEdge('Red Hook', 'Sunset Park');

  graph.addEdge('Carroll Gardens', 'Gowanus');

  graph.addEdge('Gowanus', 'Park Slope');
  graph.addEdge('Gowanus', 'South Slope');
  graph.addEdge('Gowanus', 'Sunset Park');

  graph.addEdge('Park Slope', 'Prospect Heights');
  graph.addEdge('Park Slope', 'Prospect Park');
  graph.addEdge('Park Slope', 'South Slope');

  graph.addEdge('South Slope', 'Windsor Terrace');
  graph.addEdge('South Slope', 'Sunset Park');

  graph.addEdge('Fort Greene', 'Clinton Hill');
  graph.addEdge('Fort Greene', 'Prospect Heights');
  graph.addEdge('Fort Greene', 'Navy Yard');

  graph.addEdge('Navy Yard', 'Vinegar Hill');
  graph.addEdge('Navy Yard', 'Williamsburg');
  graph.addEdge('Navy Yard', 'Clinton Hill');

  graph.addEdge('Clinton Hill', 'Crown Heights');
  graph.addEdge('Clinton Hill', 'Bedford-Stuyvesant');
  graph.addEdge('Clinton Hill', 'Prospect Heights');
  graph.addEdge('Clinton Hill', 'Crown Heights');

  graph.addEdge('Crown Heights', 'Prospect Park');
  graph.addEdge('Crown Heights', 'Prospect Heights');
  graph.addEdge('Crown Heights', 'Bedford-Stuyvesant');
  graph.addEdge('Crown Heights', 'Prospect-Lefferts Gardens');
  graph.addEdge('Crown Heights', 'East Flatbush');
  graph.addEdge('Crown Heights', 'Brownsville');

  graph.addEdge('Bedford-Stuyvesant', 'Bushwick');
  graph.addEdge('Bedford-Stuyvesant', 'Williamsburg');
  graph.addEdge('Bedford-Stuyvesant', 'Cypress Hills');

  graph.addEdge('Cypress Hills', 'Brownsville');
  graph.addEdge('Cypress Hills', 'East New York');
  graph.addEdge('Cypress Hills', 'Brownsville');

  graph.addEdge('East New York', 'Brownsville');
  graph.addEdge('East New York', 'Canarsie');

  graph.addEdge('Brownsville', 'Canarsie');
  graph.addEdge('Brownsville', 'East Flatbush');

  graph.addEdge('Canarsie', 'Bergen Beach');
  graph.addEdge('Canarsie', 'Flatlands');
  graph.addEdge('Canarsie', 'East Flatbush');

  graph.addEdge('Bergen Beach', 'Mill Basin');
  graph.addEdge('Bergen Beach', 'Flatlands');

  graph.addEdge('Mill Basin', 'Flatlands');
  graph.addEdge('Mill Basin', 'Marine Park');
  graph.addEdge('Mill Basin', 'Floyd Bennett Field');

  graph.addEdge('Marine Park', 'Floyd Bennett Field');
  graph.addEdge('Marine Park', 'Gerritsen Beach');
  graph.addEdge('Marine Park', 'Plum Beach');
  graph.addEdge('Marine Park', 'Flatlands');
  graph.addEdge('Marine Park', 'Midwood');

  graph.addEdge('Plum Beach', 'Sheepshead Bay');
  graph.addEdge('Plum Beach', 'Gerritsen Beach');

  graph.addEdge('Gerritsen Beach', 'Sheepshead Bay');

  graph.addEdge('Sheepshead Bay', 'Manhattan Beach');
  graph.addEdge('Sheepshead Bay', 'Gravesend');
  graph.addEdge('Sheepshead Bay', 'Brighton Beach');
  graph.addEdge('Sheepshead Bay', 'Midwood');

  graph.addEdge('Manhattan Beach', 'Brighton Beach');
  graph.addEdge('Brighton Beach', 'Coney Island');
  graph.addEdge('Brighton Beach', 'Gravesend');
  graph.addEdge('Coney Island', 'Gravesend');
  graph.addEdge('Coney Island', 'Sea Gate');

  graph.addEdge('Gravesend', 'Midwood');
  graph.addEdge('Gravesend', 'Besonhurst');
  graph.addEdge('Gravesend', 'Bath Beach');

  graph.addEdge('Midwood', 'Kensington');
  graph.addEdge('Midwood', 'Flatbush');
  graph.addEdge('Midwood', 'Borough Park');

  graph.addEdge('Kensington', 'Flatbush');
  graph.addEdge('Kensington', 'Windsor Terrace');
  graph.addEdge('Kensington', 'Green-Wood Cemetery');
  graph.addEdge('Kensington', 'Borough Park');

  graph.addEdge('Borough Park', 'Green-Wood Cemetery');
  graph.addEdge('Borough Park', 'Sunset Park');
  graph.addEdge('Borough Park', 'Dyker Heights');
  graph.addEdge('Borough Park', 'Bensonhurst');

  graph.addEdge('Bensonhurst', 'Bath Beach');
  graph.addEdge('Bensonhurst', 'Dyker Heights');

  graph.addEdge('Dyker Heights', 'Bath Beach');
  graph.addEdge('Dyker Heights', 'Bay Ridge');
  graph.addEdge('Dyker Heights', 'Fort Hamilton');

  graph.addEdge('Sunset Park', 'Bay Ridge');
  graph.addEdge('Flatbush', 'Prospect-Lefferts Gardens');
  graph.addEdge('East Flatbush', 'Prospect-Lefferts Gardens');

  return graph;
};
