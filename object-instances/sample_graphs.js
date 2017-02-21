let graph_without_cycles = create_graph_node("A");
let b_node = create_graph_node("B");
let c_node = create_graph_node("C");
let d_node = create_graph_node("D");
b_node.children = [c_node, d_node];
c_node.children = [d_node];
graph_without_cycles.children = [b_node, c_node];

let graph_with_cycle = create_graph_node("1");
let two_node = create_graph_node("2");
let three_node = create_graph_node("3");
let four_node = create_graph_node("4");
two_node.children = [three_node];
three_node.children = [four_node];
four_node.children = [two_node];
graph_with_cycle.children = [two_node];

let single_node_graph = create_graph_node("S");
