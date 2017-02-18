function print_combinations() {
  // Write a function that prints all possible "combinations" to a lock in which a valid combination
  // is a four digit number that represents a month and day e.g. 0123 corresponds to January 23rd
  // a valid combination cannot have two repeating digits. Assume all months have 31 days.

  // Loop through months and days
  for (let i = 1; i <= 12; i++) {
    // November will never be valid because of repeating digits
    if (i === 11) {
      continue;
    }
    for (let j = 1; j <= 31; j++) {
      // Create both digits for day and month
      let m1 = Math.floor(i / 10);
      let m2 = i % 10;
      let d1 = Math.floor(j /10);
      let d2 = j % 10;

      // Check that no two digits are the same.
      // Only four digits means a Set would be too resource intensive
      if (!(m1 === m2 || m1 === d1 || m1 === d2 ||
            m2 === d1 || m2 === d2 || d1 === d2)) {
        console.log(m1 + "" + m2 + "" + d1 + "" + d2);
      }
    }
  }
}
