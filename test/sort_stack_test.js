describe('sort_stack_test', () => {
  describe('mixed_order', () => {
    it('should return [6, 5, 4, 3, 2, 1]', () => {
      chai.assert.deepEqual(sort_stack(mixed_order), [6, 5, 4, 3, 2, 1]);
    });
  });
  describe('sorted_order', () => {
    it('should return [10, 9, 8, 7, 6, 5]', () => {
      chai.assert.deepEqual(sort_stack(sorted_order), [10, 9, 8, 7, 6, 5]);
    });
  });
  describe('reverse_sorted', () => {
    it('should return [95, 94, 93, 92, 91, 90]', () => {
      chai.assert.deepEqual(sort_stack(reverse_sorted), [95, 94, 93, 92, 91, 90]);
    });
  });
});
