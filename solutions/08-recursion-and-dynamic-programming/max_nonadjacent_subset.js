function max_nonadjacent_subset(numbers) {
  let one_previous = 0;
  let two_previous = 0;

  let helper = index => {
    let new_addend = numbers[index];
    let new_max = one_previous > two_previous + new_addend ? one_previous : new_addend + two_previous;
    two_previous = one_previous;
    one_previous = new_max;
  }

  for (let i = 0; i < numbers.length; i++) {
    helper(i);
  }

  return one_previous;
}
