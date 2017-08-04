function one_away(s1, s2) {
  // Cracking the Coding Interview 1.5
  // There are three types of edits that can be performed on strings: insert a character, remove a
  // character, or replace a character. Given two strings, write a function to check if they are one
  // edit (or zero edits) away.
  // EXAMPLE
  // pale,  ple  -> true
  // pales, pale -> true
  // pale,  bale -> true
  // pale,  bake -> false

  s1_length = s1.length;
  s2_length = s2.length;
  // If one string is more than a character longer, then one operation cannot make them equivalent.
  if (Math.abs(s1_length - s2_length) > 1) {
    return false;
  } else {
    let i = 0;
    // Find the index of the first string difference.
    while (s1.charAt(i) === s2.charAt(i) && (i < s1_length) && (i < s2_length)) {
      i++;
    }
    // If the strings are the same length, and the strings are identical after i, 
    // then a single replace edit will make them equivalent.
    if (s1_length === s2_length) {
      return s2.slice(i + 1, s2_length) === s1.slice(i + 1, s1_length);
    } else {
      // Remove the character at i from the longer string.
      // Remove and insert can be caught with one test.
      s1_length > s2_length ? 
        s1 = s1.slice(0, i) + s1.slice(i + 1, s1_length) : 
        s2 = s2.slice(0, i) + s2.slice(i + 1, s2_length);
      return s1 === s2;
    }
  }
}
