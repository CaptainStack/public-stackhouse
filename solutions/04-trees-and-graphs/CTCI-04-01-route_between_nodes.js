function route_between_nodes(start, destination) {
  // Cracking the Coding Interview problem 4.1
  // Given a directed graph, design an algorithm to find out whether this is a route between two nodes.

  let route_between_nodes_helper = function (current, destination) {
    if (current === destination) {
      return true;
    } else if (current.children.isEmpty() || current.visited) {
      return false;
    } else {
      current.visited = true;
      for (child of current.children) {
        let destination_found = route_between_nodes_helper(child, destination);
        if (destination_found) {
          return true;
        }
      }
      return false;
    }
  }
  return route_between_nodes_helper(start, destination);
}
