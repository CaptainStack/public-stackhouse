// Single node tree
let single_node = TreeNode(10);

// Valid BST
let valid_bst = TreeNode(8);
valid_bst.left = TreeNode(5);
valid_bst.right = TreeNode(11);

valid_bst.left.left = TreeNode(2);
valid_bst.left.right = TreeNode(7);

valid_bst.left.left.right = TreeNode(4);
valid_bst.left.left.right.left = TreeNode(3);

valid_bst.right.left = TreeNode(10);
valid_bst.right.right = TreeNode(18);

valid_bst.right.right.right = TreeNode(20);

// Invalid BST
let invalid_bst = TreeNode(8);
invalid_bst.left = TreeNode(4);
invalid_bst.right = TreeNode(10);

invalid_bst.left.left = TreeNode(2);
invalid_bst.left.right = TreeNode(12);

invalid_bst.right.right = TreeNode(20);
