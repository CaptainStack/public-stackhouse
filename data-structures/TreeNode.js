// Tree Node factory function
const TreeNode = (data) => {
  return {
    data: data,
    left: null,
    right: null,
    toString: function() {
      let lines = [];
      helper = (branch, level) => {
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
    }
  }
}
