// Graph Node factory function
function create_graph_node (data) {
  return {
    data: data,
    visited: false,
    children: []
  }
}
