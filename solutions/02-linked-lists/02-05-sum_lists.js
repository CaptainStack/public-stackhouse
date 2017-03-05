function sum_lists(addend_1, addend_2) {
  // Cracking the Coding Interview 2.5
  // You have two numbers represented by a linked list, where each node contains a single digit.
  // The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write
  // a function that adds the two numbers and returns the sum as a linked list.
  // EXAMPLE Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
  // Output: 2 -> 1 -> 9. That is, 912.
  // FOLLOW UP Suppose the digits are stored in forward order. Repeat the above problem.
  
  let digit_node_1 = addend_1;
  let digit_node_2 = addend_2;
  let result;
  let carry = 0;
  
  while (digit_node_1 || digit_node_2) {
    let new_digit = 0;
    if (digit_node_1) {
      new_digit += digit_node_1.data;
      digit_node_1 = digit_node_1.next;
    }
    if (digit_node_2) {
      new_digit += digit_node_2.data;
      digit_node_2 = digit_node_2.next;
    }
    new_node = ListNode(new_digit % 10 + carry);
    carry = Math.floor(new_digit / 10);
    new_node.next = result;
    result = new_node;
  }
  return result;
}
