function triple_step(n) {
  let triple_step_helper = (current_step, total_steps) => {
    if (current_step === total_steps) {
      return 1;
    } else if (current_step > total_steps) {
      return 0;
    } else {
      return triple_step_helper(current_step + 1, total_steps) +
             triple_step_helper(current_step + 2, total_steps) +
             triple_step_helper(current_step + 3, total_steps);
    }
  }
  return triple_step_helper(0, n);
}
