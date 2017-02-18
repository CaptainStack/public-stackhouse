let basic_list = [1, 2, 3, 4, 5, 6, 7, 8];
let moderate_list = [3, 4, 5, 7, 9, 14, 15, 16, 17, 18, 20];
let complex_list = [-3, -1, 0, 1, 2, 4, 99];

function minimal_tree(elements) {
  if (elements.length === 1) {
    return create_tree_node(elements[0]);
  } else {
    let root_index = Math.floor((elements.length - 1) / 2);
    let branch = create_tree_node(elements[root_index]);
    let left_elements = elements.slice(0, root_index);
    let right_elements = elements.slice(root_index + 1);
    if (!left_elements.isEmpty()) {
      branch.left = minimal_tree(left_elements);
    }
    if (!right_elements.isEmpty()) {
      branch.right = minimal_tree(right_elements);
    }
    return branch;
  }
}
