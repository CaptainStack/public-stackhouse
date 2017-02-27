function partition(x, list) {
  // Cracking the Coding Interview 2.4
  // Write code to partition a linked list around a value x, such that all nodes less than x come
  // before all nodes greater than or exual to x. If x is contained within the list, the values of x 
  // only need to be after the elements less than x (see below). The partition element x can appear
  // anywhere in the "right partition"; it does not need to appear between the left and right partitions.
  
  let right_partition;
  let previous = list;
  let current = list;
  let front = list;
  while (current) {
    if (current.data >= x) {
      if (current === front) {
        front = previous.next;
        current.next = right_partition;
        right_partition = current;
        previous = front;
        current = front;
      } else {
        previous.next = current.next;
        current.next = right_partition;
        right_partition = current;
        current = previous.next;
      }
    } else {
      previous = current;
      current = current.next;
    }
  }
  previous.next = right_partition;
  return front;
}
