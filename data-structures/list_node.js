// Linked List Node factory function
function ListNode(data) {
  return {
    data: data,
    next: null,
    appendTail: function(new_node) {
      let current = this;
      while (current.next) {
        current = current.next;
      }
      current.next = new_node;
    },
    toString: function() {
      let current = this;
      let return_string = '';
      while (current) {
        if (current.next) {
          return_string += `[${current.data}] -> `;
        } else {
          return_string += `[${current.data}]`;
        }
        current = current.next;
      }
      return return_string;
    }
  }
}
