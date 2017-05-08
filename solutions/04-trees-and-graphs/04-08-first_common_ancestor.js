function first_common_ancestor(root, target_1, target_2) {
  let helper = (current) => {
    if (current.left && current.left.depthFirstSearch(target_1) !== -1 && current.left.depthFirstSearch(target_2) !== -1) {
      return helper(current.left);
    } else if (current.right && current.right.depthFirstSearch(target_1) !== -1 && current.right.depthFirstSearch(target_2) !== -1) {
      return helper(current.right);
    } else {
      return current;
    }
  }
  return helper(root);
}
