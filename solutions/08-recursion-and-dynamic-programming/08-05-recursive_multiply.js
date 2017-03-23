function recursive_multiply(a, b) {
  // Cracking the Coding Interview 8.5
  // Write a recursive function to multiply two positive integers without using the * operator. You can
  // use addition, subtraction, and bit-shifting, but you should minimie the number of those operators.

  // Using the larger number for the addition will mean fewer recursive calls.
  // E.g. (3 * 2) === (2 + 2 + 2) === (3 + 3) <-- Fewer operations
  let [factor_1, factor_2] = a > b ?  [a, b] : [b, a];
  let helper = (factor_2, total) => {
    if (factor_2 === 0) {
      return total;
    } else if (factor_2 === 1) {
      return factor_1;
    } else if (factor_2 % 2 === 0) {
      // If factor_2 is even, calculate the product of half of factor_2 and factor_1 and double it.
      // E.g. 5 * 6 === 5(3 * 2)
      total += helper(factor_2 >> 1, total);
      return total + total;
    } else {
      // If factor_2 is odd, subtract 1 to make it even, do the same halving and doubling as above, and
      // add factor_1 at the end to calculate the final result.
      // E.g. 5 * 7 === 5(3 * 2) + 5
      total += helper((factor_2 - 1) >> 1, total);
      total += total;
      total += factor_1;
      return total;
    }
  }
  return helper(factor_2, 0);
}
