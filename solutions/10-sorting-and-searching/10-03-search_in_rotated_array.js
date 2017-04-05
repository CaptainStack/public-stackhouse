function search_in_rotated_array(list, target) {
  // Cracking the Coding Interview 10.3
  // Given a sorted array of n integers that has been rotated an unknown number of times, write code to
  // find an element in the array. You may assume that the array was originally sorted in increasing order.
  // EXAMPLE: search_in_rotated_array([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5) === 8

  let start = 0;
  let end = list.length - 1;
  let search_index = Math.floor((end - start) / 2);
  let search_element = list[search_index];

  while (search_element !== target && search_index !== -1) {
    if (start === end) {
      search_index = -1;
    } else if (target > list[end] || target < search_element) {
      end = search_index - 1;
      search_index = start + Math.floor((end - start) / 2);
      search_element = list[search_index];
    } else {
      start = search_index + 1;
      search_index = start + Math.floor((end - start) / 2);
      search_element = list[search_index];
    }
  }

  return search_index;
}

