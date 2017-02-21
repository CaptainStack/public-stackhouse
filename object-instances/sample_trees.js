// Single node tree
let single_node = create_tree_node(10);

// Valid BST
let valid_bst = create_tree_node(8);
valid_bst.left = create_tree_node(5);
valid_bst.right = create_tree_node(11);

valid_bst.left.left = create_tree_node(2);
valid_bst.left.right = create_tree_node(7);

valid_bst.left.left.right = create_tree_node(4);
valid_bst.left.left.right.left = create_tree_node(3);

valid_bst.right.left = create_tree_node(10);
valid_bst.right.right = create_tree_node(18);

valid_bst.right.right.right = create_tree_node(20);

// Invalid BST
let invalid_bst = create_tree_node(8);
invalid_bst.left = create_tree_node(4);
invalid_bst.right = create_tree_node(10);

invalid_bst.left.left = create_tree_node(2);
invalid_bst.left.right = create_tree_node(12);

invalid_bst.right.right = create_tree_node(20);
