function return_kth_to_last(list, k) {
  // Cracking the Coding Interview problem 2.2
  // Implement an algorithm to find the kth to last element of a singly linked list.
  
  let size = 0;
  let current = list;
  while (current) {
    size++;
    current = current.next;
  }
  let index = 0;
  current = list;
  while (index < size - k) {
    current = current.next;
    index++;
  }
  return current;
}
