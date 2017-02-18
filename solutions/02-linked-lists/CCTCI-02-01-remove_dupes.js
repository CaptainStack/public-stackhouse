function remove_dupes(list) {
  // Cracking the Coding Interview problem 2.1
  // Write code to remove duplicates from an unsorted linked list
  // FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed?

  let encountered_nodes = new Set();
  let previous = list;
  let current = list.next;
  encountered_nodes.add(previous.data);

  while (current) {
    if (encountered_nodes.has(current.data)) {
      previous.next = current.next;
      current = previous.next;
    } else {
      encountered_nodes.add(current.data);
      previous = current;
      current = current.next;
    }
  }
  return list;
}
