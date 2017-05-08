// Single node tree
let single_node = TreeNode(10);

// Valid BST
let valid_bst = TreeNode(8);
valid_bst.left = TreeNode(5);
valid_bst.right = TreeNode(11);

valid_bst.left.left = TreeNode(2);
let shallow_left = TreeNode(7);
valid_bst.left.right = shallow_left;

valid_bst.left.left.right = TreeNode(4);
let far_left_node = TreeNode(3);
valid_bst.left.left.right.left = far_left_node;

valid_bst.right.left = TreeNode(10);
valid_bst.right.right = TreeNode(18);

let close_to_bottom = TreeNode(20);
valid_bst.right.right.right = close_to_bottom;

// Invalid BST
let invalid_bst = TreeNode(8);
invalid_bst.left = TreeNode(4);
invalid_bst.right = TreeNode(10);

invalid_bst.left.left = TreeNode(2);
invalid_bst.left.right = TreeNode(12);

invalid_bst.right.right = TreeNode(20);
