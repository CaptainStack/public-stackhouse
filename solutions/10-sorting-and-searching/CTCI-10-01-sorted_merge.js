let A = [1, 1, 3, 7, 8, 9, null, null, null, null, null, null];
let B = [2, 3, 5, 5, 6, 10];

function sorted_merge(A, B) {
  // Cracking the Coding Interview problem 10.1
  // You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B.
  // Write a method to merge B into A in sorted order.

  let swap_index = A.length -1;
  let B_index = B.length - 1;
  let A_index = 0;
  for (let [index, value] of A.entries()) {
    if (!value) {
      A_index = index - 1;
      break;
    }
  }

  while (B_index >= 0) {
    if (B[B_index] >= A[A_index]) {
      A[swap_index] = B[B_index];
      B_index--;
      swap_index--;
    } else {
      A[swap_index] = A[A_index];
      A[A_index] = null;
      A_index--;
      swap_index--;
    }
  }
  return A;
}
