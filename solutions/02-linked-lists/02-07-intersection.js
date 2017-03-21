function intersection (l1, l2) {
  // Cracking the Coding Interview 2.7
  // Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node.
  // Note that the intersection is defined based on reference, not value. That is, if the kth node of the
  // first linked list is the exact same node (by reference) as the jth node of the second linked list, 
  // then they are intersecting.

  let current_1 = l1;
  let current_2 = l2;
  let visited_nodes = new Set();
  while (current_1 || current_2) {
    // Check if either ListNode has been seen before. If so, return it.
    if (visited_nodes.has(current_1)) {
      return current_1;
    } else if (visited_nodes.has(current_2)) {
      return current_2;
    }

    // Continue traversing the lists and adding nodes to the visited set.
    if (current_1) {
      visited_nodes.add(current_1);
      current_1 = current_1.next;
    } else if (current_2) {
      visited_nodes.add(current_2);
      current_2 = current_2.next;
    }
  }
  return undefined;
}
