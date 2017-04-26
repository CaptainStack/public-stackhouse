function pretty_print(string) {
  /* Write a function that takes a string of curly braces and letters and prints a reformatted version
  in which the brackets sit on their own line and subsequent content is indented one level per bracket
  Example input:
  test1{test2}

  Would become:
  test1
  {
    test2
  }
  */

  let output_string = '';
  let indentation = '';
  let last_char = '';
  let active_opening_brackets = [];

  for (let char of string) {
    if (char !== '{' && char !== '}') {
      if (last_char === '{' || last_char === '}') {
        output_string += "\n";
        output_string += indentation;
      }
      output_string += char;
    } else if (char === '{') {
      output_string += "\n";
      active_opening_brackets.push(char);
      output_string += indentation;
      output_string += char;
      indentation += '  ';
    } else if (char === '}') {
      if (active_opening_brackets.pop()) {
        output_string += "\n";
        indentation = indentation.slice(0, indentation.length - 2);
        output_string += indentation;
        output_string += char;
      } else {
        return;
      }
    }
    last_char = char;
  }
  if (active_opening_brackets.length === 0) {
    console.log(output_string);
  } else {
    return;
  }
}
