let list_with_duplicates                      = create_list_node(1);
list_with_duplicates.next                     = create_list_node(1);
list_with_duplicates.next.next                = create_list_node(2);
list_with_duplicates.next.next.next           = create_list_node(2);
list_with_duplicates.next.next.next.next      = create_list_node(3);
list_with_duplicates.next.next.next.next.next = create_list_node(3);

let single_node_list = create_list_node(0);

let all_duplicates = create_list_node(7);
all_duplicates.next = create_list_node(7);
all_duplicates.next.next = create_list_node(7);
all_duplicates.next.next.next = create_list_node(7);
all_duplicates.next.next.next.next = create_list_node(7);

let ten_node_list = create_list_node(0);
ten_node_list.next = create_list_node(1);
ten_node_list.next.next = create_list_node(2);
ten_node_list.next.next.next = create_list_node(3);
ten_node_list.next.next.next.next = create_list_node(4);
ten_node_list.next.next.next.next.next = create_list_node(5);
ten_node_list.next.next.next.next.next.next = create_list_node(6);
ten_node_list.next.next.next.next.next.next.next = create_list_node(7);
ten_node_list.next.next.next.next.next.next.next.next = create_list_node(8);
ten_node_list.next.next.next.next.next.next.next.next.next = create_list_node(9);
