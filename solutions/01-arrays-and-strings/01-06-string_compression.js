function string_compression(string) {
  // Cracking the Coding Interview 1.6
  // Implement a method to perform basic string compression using the counts of repeated characters.
  // For example, the string aabcccccaaa would become a2b3c5a3. If the "compressed" string would
  // not become smaller than the original string, your method should return the original string. You
  // can assume the string has only uppercase and lowercase letters (a-z).

  let current_character = string.charAt(0);
  let character_count = 0;
  let original_length = string.length;
  let new_string = '';

  for (character of string) {
    if (new_string.length >= original_length) {
      return string;
    } else if (character !== current_character) {
      new_string += current_character + character_count;
      current_character = character;
      character_count = 1;
    } else {
      character_count += 1;
    }
  }
  new_string += current_character + character_count;
  return new_string.length < original_length ? new_string : string;
}
