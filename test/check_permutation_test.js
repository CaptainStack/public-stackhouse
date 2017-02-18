describe('check_permutation_test', function() {
  describe('valid_permutation', function() {
    it('should return true for "read" and "dear"', function() {
      chai.assert.equal(check_permutation('read', 'dear'), true);
    });
    it('should return true for equivalent strings', function() {
      chai.assert.equal(check_permutation('equivalent', 'equivalent'), true);
    });
  });
});
