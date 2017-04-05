function binary_search(list, target) {
  let start = 0;
  let end = list.length - 1;
  let search_index = Math.floor((end - start) / 2);

  while (list[search_index] !== target && search_index !== -1) {
    if (start === end) {
      search_index = -1;
    } else if (list[search_index] > target) {
      end = search_index - 1;
      search_index = start + Math.floor((end - start) / 2);
    } else {
      start = search_index + 1;
      search_index = start + Math.floor((end - start) / 2);
    }
  }

  return search_index;
}
