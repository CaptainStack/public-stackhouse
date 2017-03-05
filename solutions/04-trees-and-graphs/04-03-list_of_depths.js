function list_of_depths(tree) {
  let lists = [];
  let lists_of_depths_helper = (branch, depth) => {
    if (lists[depth]) {
      lists[depth].appendTail(ListNode(branch.data));
    } else {
      lists[depth] = ListNode(branch.data);
    }
    if (branch.left) {
      lists_of_depths_helper(branch.left, depth + 1);
    }
    if (branch.right) {
      lists_of_depths_helper(branch.right, depth + 1);
    }
  }
  lists_of_depths_helper(tree, 0);
  return lists;
}
