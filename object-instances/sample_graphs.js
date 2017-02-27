let graph_without_cycles = GraphNode("A");
let b_node = GraphNode("B");
let c_node = GraphNode("C");
let d_node = GraphNode("D");
b_node.children = [c_node, d_node];
c_node.children = [d_node];
graph_without_cycles.children = [b_node, c_node];

let graph_with_cycle = GraphNode("1");
let two_node = GraphNode("2");
let three_node = GraphNode("3");
let four_node = GraphNode("4");
two_node.children = [three_node];
three_node.children = [four_node];
four_node.children = [two_node];
graph_with_cycle.children = [two_node];

let single_node_graph = GraphNode("S");
