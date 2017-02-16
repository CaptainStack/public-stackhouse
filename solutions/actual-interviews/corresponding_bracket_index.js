// Write a function that takes a string that represents source code and an int that represents a caret index in the source code.
// If the caret index is pointed at a bracket, curly brace, or parenthesis, return the index of the corresponding brace.

let valid_source_code     = '[[abc]][({Andre Stackhouse})]0';
//                           012345678901234567890123456789
let improper_nesting      = '12([)]444';
//                           012345678
let wrong_closing_bracket = '[a](3){#$}[)';
//                           012345678901
let unclosed_bracket      = '[][(){}';
//                           0123456
let no_braces             = 'abcdefg'; 
//                           0123456

function corresponding_bracket_index(source_code, caret_index) {
}

// Test code

// console.log(corresponding_bracket_index(valid_source_code, 0)); // Should return 6
// console.log(corresponding_bracket_index(valid_source_code, 6)); // Should return 0
// console.log(corresponding_bracket_index(valid_source_code, 9)); // Should return 26
// console.log(corresponding_bracket_index(valid_source_code, 27)); // Should return 8

// Uncomment one at a time to test errors

// console.log(corresponding_bracket_index(improper_nesting, 2)); // Should throw error 'Invalid brackets in source code.'
// console.log(corresponding_bracket_index(wrong_closing_bracket, 2)); // Should throw error 'Invalid brackets in source code.'
// console.log(corresponding_bracket_index(unclosed_bracket, 2)); // Should throw error 'Unclosed brackets in source code.'
// console.log(corresponding_bracket_index(no_braces, 2)); // Should throw error 'Invalid caret index. Caret must point to a bracket.'
// console.log(corresponding_bracket_index(valid_source_code, 2)); // Should throw error 'Invalid caret index. Caret must point to a bracket.'