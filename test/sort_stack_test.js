describe('sort_stack_test', function() {
  describe('mixed_order', function() {
    it('should return [6, 5, 4, 3, 2, 1]', function() {
      chai.assert.deepEqual(sort_stack(mixed_order), [6, 5, 4, 3, 2, 1]);
    });
  });
  describe('sorted_order', function() {
    it('should return [10, 9, 8, 7, 6, 5]', function() {
      chai.assert.deepEqual(sort_stack(sorted_order), [10, 9, 8, 7, 6, 5]);
    });
  });
  describe('reverse_sorted', function() {
    it('should return [95, 94, 93, 92, 91, 90]', function() {
      chai.assert.deepEqual(sort_stack(reverse_sorted), [95, 94, 93, 92, 91, 90]);
    });
  });
});
