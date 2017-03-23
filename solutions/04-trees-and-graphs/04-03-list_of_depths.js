function list_of_depths(tree) {
  // Cracking the Coding Interview 4.3
  // Given a binary tree, design an algorithm which creates a linked list of all the nodes 
  // at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
  
  let lists = [];
  let helper = (branch, depth) => {
    if (lists[depth]) {
      lists[depth].appendTail(ListNode(branch.data));
    } else {
      lists[depth] = ListNode(branch.data);
    }
    if (branch.left) {
      helper(branch.left, depth + 1);
    }
    if (branch.right) {
      helper(branch.right, depth + 1);
    }
  }
  helper(tree, 0);
  return lists;
}
