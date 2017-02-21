function minimal_tree(elements) {
  // Cracking the Coding Interview problem 4.2
  // Given a sorted (increasing order) array with unique integer elements, write an algorithm to create
  // a binary search tree with minimal height
  
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
