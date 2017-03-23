function is_binary_search_tree(root) {
  // Write a function that takes the root node of a binary tree and returns 
  // true if the tree is a binary search tree.
  
  let helper = function (node, min_value, max_value) {
    if (!node) {
      return true;
    } else {
      return node.data > min_value && 
            node.data < max_value && 
            helper(node.left, min_value, node.data) && 
            helper(node.right, node.data, max_value);
    }
  }
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
