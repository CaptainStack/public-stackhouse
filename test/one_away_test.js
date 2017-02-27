describe('one_away_test', () => {
  describe('insert/remove', () => {
    it('should return true for "pale and "ple"', () => {
      chai.assert.equal(one_away('pale', 'ple'), true);
    });
    it('should return false for "pale and "pl"', () => {
      chai.assert.equal(one_away('pale', 'pl'), false);
    });
  });
  describe('replace', () => {
    it('should return true for "pale" and "bale"', () => {
      chai.assert.equal(one_away("pale", "pales"), true);
    });
    it('should return false for "pale" and "bald"', () => {
      chai.assert.equal(one_away("pale", "bald"), false);
    });
  });
  describe('equivalent', function () {
    it('should return true for "hello" and "hello"', () => {
      chai.assert.equal(one_away("hello", "hello"), true);
    });
    it('should return true for two empty strings', () => {
      chai.assert.equal(one_away("", ""), true);
    });
  });
});
