function triple_step(n) {
  // Cracking the Coding Interview problem 8.1
  // A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a
  // time. Implement a method to count how many possible ways the child can run up the stairs.
  let cache_table = [];
  let triple_step_helper = (current_step, total_steps) => {
    if (current_step === total_steps) {
      return 1;
    } else if (current_step > total_steps) {
      return 0;
    } else {
      if (!cache_table[current_step]) {
        cache_table[current_step] = triple_step_helper(current_step + 1, total_steps) +
                             triple_step_helper(current_step + 2, total_steps) +
                             triple_step_helper(current_step + 3, total_steps);
        return cache_table[current_step];
      } else {
        return cache_table[current_step];
      }
    }
  }
  return triple_step_helper(0, n);
}
