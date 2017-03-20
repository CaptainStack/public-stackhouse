function string_rotation(s1, s2) {
  // Assume you have a method isSubstring which checks if one word is a substring of another. Given two
  // strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
  // (e.g., "waterbottle" is a rotation of "erbottlewat").
  
  let s2_sub = s2;
  let pivot_index = 0;
  while (s1.indexOf(s2_sub) === -1 && s2_sub.length > 0) {
    s2_sub = s2_sub.slice(1);
    pivot_index++;
  }
  return s1.replace(s2_sub, '') === s2.slice(0, pivot_index);
}
