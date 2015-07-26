var Node = function(name, attrs){
  this.edge_list = [];
  this.name = name;

  if (attrs !== undefined) {
    this.attrs = attrs;
  } else {
    this.attrs = [];
  }
}

Node.prototype.addEdge = function(end){
  this.edge_list.push(end);
}

var Graph = function(){
  this.node_list = [];
}

Graph.prototype.findNode = function(name) {
  var findNodeFilterFn = function(searchValue) {
    return (function (value) { return value.name === searchValue; });
  };

  return this.node_list.filter( findNodeFilterFn(name) )[0];
}

Graph.prototype.addEdge = function(s, e) {
  /*var findNodeFilterFn = function(searchValue) {
    return (function (value) { return value.name === searchValue; });
  };*/
  var startNode = this.findNode(s); //this.node_list.filter( findNodeFilterFn(s) )[0];
  var endNode = this.findNode(e); //this.node_list.filter( findNodeFilterFn(e) )[0];

  if (!startNode) {
    startNode = new Node(s);
    this.node_list.push(startNode);
  }

  if (!endNode) {
    endNode = new Node(e);
    this.node_list.push(endNode);
  }

  startNode.addEdge(endNode);
  endNode.addEdge(startNode);
}

Graph.prototype.colorGraph = function(colorCount) {
  coloredGraph = this.node_list.slice(0);

  // Sort in decreasing order of Degree(v)
  uncolored = coloredGraph.sort(function (a, b) {
    if (a.edge_list.length < b.edge_list.length) {
      return 1;
    }
    if (a.edge_list.length > b.edge_list.length) {
      return -1;
    }

    return 0;
  });

  var currentColor = 0;
  while (uncolored.length > 0) {
    var nextNode = uncolored.shift();

    nextNode.attrs.color = currentColor;
    var coloredWithCurrent = nextNode.edge_list.map(function (n) {return n.name;});

    uncolored.forEach(function(n) {
      // if not adjacent to any node using the currentColor then ...
      if (coloredWithCurrent.indexOf(n.name) === -1) {
        n.attrs.color = currentColor;
        coloredWithCurrent.concat(
          n.edge_list.map(function (n) {return n.name;})
        );

        var index = uncolored.indexOf(n);
        uncolored.splice(index, 1);
      }
    });

    currentColor += 1;
  }
};
