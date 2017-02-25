describe('one_away_test', function() {
  describe('insert/remove', function() {
    it('should return true for "pale and "ple"', function() {
      chai.assert.equal(one_away('pale', 'ple'), true);
    });
    it('should return false for "pale and "pl"', function() {
      chai.assert.equal(one_away('pale', 'pl'), false);
    });
  });
  describe('replace', function() {
    it('should return true for "pale" and "bale"', function() {
      chai.assert.equal(one_away("pale", "pales"), true);
    });
    it('should return false for "pale" and "bald"', function() {
      chai.assert.equal(one_away("pale", "bald"), false);
    });
  });
  describe('equivalent', function () {
    it('should return true for "hello" and "hello"', function() {
      chai.assert.equal(one_away("hello", "hello"), true);
    });
    it('should return true for two empty strings', function() {
      chai.assert.equal(one_away("", ""), true);
    });
  });
});
