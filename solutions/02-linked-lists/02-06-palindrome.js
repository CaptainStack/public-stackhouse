function palindrome(list) {
  // Cracking the Coding Interview 2.6
  // Implement a function to check if a linked list is a palindrome.
  
  let reverse_list = null;
  let current = list;
  let length = 0;

  // Iterate through the original list and build a new one in reverse order. Keep track of length.
  while (current) {
    length++;
    let node_clone = ListNode(current.data);
    node_clone.next = reverse_list;
    reverse_list = node_clone;
    current = current.next;
  }

  current = list;
  reverse_current = reverse_list;
  let i = 0;
  // Compare the original list to the reverse list. If the first half is the same so is the second.
  while (i < Math.floor(length / 2)) {
    i++;
    if (current.data !== reverse_current.data) {
      return false;
    }
    current = current.next;
    reverse_current = reverse_current.next;
  }
  return true;
}
