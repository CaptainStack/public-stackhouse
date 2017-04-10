// Graph Node factory function
const GraphNode = (data) => {
  return {
    data: data,
    children: [],
    printBFS: function(target) {
      let search_nodes = [];
      search_nodes.push(this);
      let message = "Target not in graph";
      while (!search_nodes.isEmpty()) {
        let current = search_nodes.shift();
        current.visited ? current.visited =  current.visited + 1 :  current.visited = 1;
        console.log(current.data);
        if (current === target) {
          message = "Target found";
          break;
        }
        for (child of current.children) {
          if (!search_nodes.includes(child)) {
            search_nodes.push(child);
          }
        }
      }
      console.log(message);
    }
  }
}
