function urlify(character_array, actual_length) {
  // Write a method to replace all spaces in a string with '%20'. You may assume that the string has 
  // sufficient space at the end to hold the additional characters, and that you are given the "true" 
  // length of the string. Use a character array so that you can perform this operation in place.
  // EXAMPLE: (input: "Mr John Smith    ", 13) (output: "Mr%20John%20Smith")

  let current_string_index = actual_length - 1;
  let swap_index = character_array.length - 1;

  while (current_string_index >= 0) {
    if (character_array[current_string_index] !== ' ') {
      character_array.swap(current_string_index, swap_index);
      current_string_index--;
      swap_index--;
    } else {
      character_array[swap_index] = '0';
      character_array[swap_index - 1] = '2';
      character_array[swap_index - 2] = '%';
      current_string_index--;
      swap_index -= 3;
    }
  }
  return character_array;
}
