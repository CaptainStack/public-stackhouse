function is_binary_search_tree(root) {
  // Write a function that takes the root node of a binary tree and returns 
  // true if the tree is a binary search tree.
  
  let is_binary_search_tree_helper = function (node, min_value, max_value) {
    if (!node) {
      return true;
    } else {
      return node.data > min_value && 
            node.data < max_value && 
            is_binary_search_tree_helper(node.left, min_value, node.data) && 
            is_binary_search_tree_helper(node.right, node.data, max_value);
    }
  }
  return is_binary_search_tree_helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
