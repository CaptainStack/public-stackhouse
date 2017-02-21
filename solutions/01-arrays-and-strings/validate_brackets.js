function validate_brackets(string) {
  // Given a string that represents source code, write a function that checks if the braces are 
  // properly paired and nested.
  // E.g. [({aa})] <- valid [(aa]) <- invalid [aa} <- invalid [hello <- invalid
  
  let brackets = [];
  for (character of string) {
    if (character === "(" || character === "{" || character === "[") {
      brackets.push(character);
    } else if (character === ")" && brackets.pop() !== "(" ||
               character === "}" && brackets.pop() !== "{" ||
               character === "]" && brackets.pop() !== "[") {
      return false;
    }
  }
  return brackets.isEmpty();
}
