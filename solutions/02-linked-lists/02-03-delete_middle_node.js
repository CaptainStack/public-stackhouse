function delete_middle_node(list, node) {
  // Cracking the Coding Interview problem 2.3
  // Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node,
  // not necessarily the exact middle) of a singly linked list, given only access to that node.
  // EXAMPLE
  // Input: the node c from the linked list a->b->c->d->e->f
  // Result: nothing is returned by the new linked list looks like a->b->d->e->f

  let previous = list;
  let current = list.next;

  while (current) {
    if (node === current) {
      previous.next = current.next;
      break;
    } else {
      previous = current;
      current = current.next;
    }
  }
}
