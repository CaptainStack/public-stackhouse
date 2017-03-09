function recursive_multiply(a, b) {
  let [factor_1, factor_2] = a > b ?  [a, b] : [b, a];
  let recursive_multiply_helper = (factor_2, total) => {
    if (factor_2 === 0) {
      return total;
    } else if (factor_2 === 1) {
      return factor_1;
    } else if (factor_2 % 2 === 0) {
      return 2 * recursive_multiply_helper(factor_2 / 2, total);
    } else {
      total += 2 * recursive_multiply_helper((factor_2 - 1) / 2, total);
      total += factor_1;
      return total;
    }
  }
  return recursive_multiply_helper(factor_2, 0);
}
