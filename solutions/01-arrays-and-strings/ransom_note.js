let note = "I have your daughter";
let string_repo = "I have your daughter and her birthday present";

function ransom_note(note, string_repo) {
  // Given a string, a "ransom note," and a second string, a "collection of newspapers/magazines," 
  // write a function that returns true if the second string contains the correct collection of 
  // characters such that the ransom note can be recreated and return false otherwise.

  // Helper to convert a string into a map of characters to number of instances
  let convert_string_to_character_map = (string) => {
    let character_map = new Map();
    for (let character of string) {
      let quantity = character_map.get(character) || 0;
      character_map.set(character, quantity + 1);
    }
    return character_map;
  }

  // Helper to check if a map has no values over 0
  let map_is_empty = (map) => {
    let values = map.values();
    for (let value of values) {
      if (value > 0) {
        return false;
      }
    }
    return true;
  }

  let note_character_map = convert_string_to_character_map(note);
  
  // Iterate through the string repo and remove characters from the character map one at a time if 
  // they were in the original ransom note. If the map is successfully emptied, the note can be 
  // recreated and the function returns true.
  for (let character of string_repo) {
    if (map_is_empty(note_character_map)) {
      return true;
    } else {
      let quantity = note_character_map.get(character);
      if (quantity) {
        note_character_map.set(character, quantity - 1);
      }
    }
  }
  return false;
}
