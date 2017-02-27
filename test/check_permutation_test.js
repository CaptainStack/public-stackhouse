mocha.setup('bdd');

describe('check_permutation_test', () => {
  describe('valid_permutation', () => {
    it('should return true for "read" and "dear"', () => {
      chai.assert.equal(check_permutation('read', 'dear'), true);
    });
    it('should return true for equivalent strings', () => {
      chai.assert.equal(check_permutation('equivalent', 'equivalent'), true);
    });
    it('should return true for two empty strings', () => {
      chai.assert.equal(check_permutation('', ''), true);
    });
  });
  describe('invalid_permutation', () => {
    it('should return false for "noon" and "moon"', () => {
      chai.assert.equal(check_permutation('noon', 'moon'), false);
    });
  });
});
