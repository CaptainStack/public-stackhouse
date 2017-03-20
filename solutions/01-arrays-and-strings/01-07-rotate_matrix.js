function rotate_matrix(matrix) {
  // Cracking the Coding Interview 1.7
  // Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
  // write a method to rotate the image by 90 degrees. Can you do this in place?

  let m_index = matrix.length - 1;
  let rotated_matrix = [];
  for (let i = 0; i <= m_index; i++) {
    rotated_matrix.push([]);
  }

  for (let [i, row] of matrix.entries()) {
    for (let [j, value] of row.entries()) {
      rotated_matrix[m_index - (m_index - j)][m_index - i] = value;
    }
  }
  return rotated_matrix;
}
