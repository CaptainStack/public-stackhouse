// Tree Node factory function
const TreeNode = (data) => {
  return {
    data: data,
    left: null,
    right: null,
    toString: function() {
      let lines = [];
      let helper = (branch, level) => {
        if (!lines[level]) lines[level] = '';
        if (!lines[level + 1]) lines[level + 1] = '';
        lines[level] += branch.data + ' ';
        if (branch.left) {
          lines[level + 1] += '/ '
          helper(branch.left, level + 2);
        }
        if (branch.right) {
          lines[level + 1] += '\\ ';
          helper(branch.right, level + 2)
        }
      }
      helper(this, 0);
      for (line of lines) {
        console.log(line);
      }
    },
    printBFS: function(target_node) {
      let node_queue = [];
      node_queue.push(this);
      let feedback_string = "Target not in tree";
      while (!node_queue.isEmpty()) {
        let current_node = node_queue.shift();
        console.log(current_node.data);
        if (current_node === target_node) {
          feedback_string = "Target found";
          break;
        }
        if (current_node.left) {
          node_queue.push(current_node.left);
        }
        if (current_node.right) {
          node_queue.push(current_node.right);
        }
      }
      console.log(feedback_string);
    }
  }
}
