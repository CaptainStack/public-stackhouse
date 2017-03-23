function check_balanced(root) {
  // Cracking the Coding Interview 4.4
  // Implement a function to check if a binary tree is balanced. For the purposes of this question, a
  // balanced tree is defined to be a tree such that the heights of the two subtrees of any node never
  // differ by more than one.
  
  let helper = (node) => {
    if (!node) {
      return 0;
    }
    let left_level = helper(node.left);
    if (left_level === -1) {
      return -1;
    }
    let right_level = helper(node.right);
    if (right_level === -1) {
      return -1;
    }
    if (Math.abs(left_level - right_level) > 1) {
      return -1;
    }
    return left_level > right_level ? left_level + 1 : right_level + 1;
  }

  return helper(root) !== -1;
}
