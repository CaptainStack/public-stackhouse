// Graph Node factory function
const GraphNode = (data) => {
  return {
    data: data,
    visited: false,
    children: []
  }
}
