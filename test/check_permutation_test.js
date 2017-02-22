mocha.setup('bdd');

describe('check_permutation_test', function() {
  describe('valid_permutation', function() {
    it('should return true for "read" and "dear"', function() {
      chai.assert.equal(check_permutation('read', 'dear'), true);
    });
    it('should return true for equivalent strings', function() {
      chai.assert.equal(check_permutation('equivalent', 'equivalent'), true);
    });
    it('should return true for two empty strings', function() {
      chai.assert.equal(check_permutation('', ''), true);
    });
  });
  describe('invalid_permutation', function() {
    it('should return false for "noon" and "moon"', function() {
      chai.assert.equal(check_permutation('noon', 'moon'), false);
    });
  });
});
