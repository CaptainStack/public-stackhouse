function sort_stack(stack) {
  // Cracking the Coding Interview 3.5
  // Write a program to sort a stack such that the smallet itmes are on the top. You can use an 
  // additional temporary stack, but you may not copy the elements into any other data structure
  // (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
  
  let reverse_sorted = []; // Create a stack to place elements in reverse sorted order.
  let current = stack.pop();

  // Sort items into reverse_sorted stack until all original items are in second stack.
  while (!stack.isEmpty() || current) {
    // If the top of stack is greater than the item on top of reverse_sorted, add it to reverse_sorted
    if (reverse_sorted.peek() < current || !reverse_sorted.peek()) {
      reverse_sorted.push(current);
      current = stack.pop();
    }
    // If top of reverse_sorted is greater than current element, move items to 
    // stack until there is a proper spot for current in reverse_sorted stack.
    while (reverse_sorted.peek() > current) {
      stack.push(reverse_sorted.pop());
    }
  }

  // When all elements have been put into reverse_sorted in proper order, 
  // pop them into stack to get them into sorted order.
  while(!reverse_sorted.isEmpty()) {
    stack.push(reverse_sorted.pop());
  }
  return stack;
}
