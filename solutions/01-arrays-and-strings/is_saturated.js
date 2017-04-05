function is_saturated(range_array, head, tail) {
  // Write a function that takes an array of integer ranges, and an upper and lower bound.
  // It returns true if the ranges in the array include every value within the bounds.
  // It returnsfalse if any of the following conditions are met:
  // 1. The ranges do not cover every value between head and tail.
  // 2. Any ranges include values outside of head and tail.
  // 3. Any ranges overlap. The ranges are inclusive, but it is okay if they overlap at their edges.

  // EXAMPLES:
  // is_saturated([range(0, 5), range(5, 10)], 0, 10) -> true
  // is_saturated([range(0, 5), range(6, 10)], 0, 10) -> true
  // is_saturated([range(0, 5), range(3, 10)], 0, 10) -> false
  // is_saturated([range(0, 11)], 0, 10) -> false

  // Store the number of times a value has been encountered in encountered_values at the index of value.
  // E.g. let times_value_encountered = encountered_values[value];
  let encountered_values = [];

  // Iterate through each range and check that its values are within head and tail.
  for (let range of range_array) {
    if (range.start < head || range.end > tail) {
      return false;
    } else {
      for (let i = range.start; i <= range.end; i++) {
        encountered_values[i] ? encountered_values[i] += 1 : encountered_values[i] = 1;
        if (encountered_values[i] == 2 && (encountered_values[i - 1] === 2 || 
                                           encountered_values[i + 1] === 2)) {
          return false;
        }
      }
    }
  }

  for (let i = head; i <= tail; i++) {
    let quantity = encountered_values[i];
    if (!quantity) {
      return false;
    }
  }
  return true;
}
