function check_permutation(word1, word2) {
  // Cracking the Coding Interview problem 1.2
  // Given two strings, write a method to decide if one is a permutation of the other
  
  let character_map = new Map();
  for (character of word1) {
    let quantity = character_map.get(character);
    if (quantity) {
      character_map.set(character, quantity + 1);
    } else {
      character_map.set(character, 1);
    }
  }
  for (character of word2) {
    let quantity = character_map.get(character);
    if (!quantity || quantity < 1) {
      return false;
    } else {
      character_map.set(character, quantity - 1);
    }
  }
  for (value of character_map.values()) {
    if (value > 0) {
      return false;
    }
  }
  return true;
}
