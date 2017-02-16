mocha.setup('bdd');

describe('corresponding_bracket_index(source_code, caret_index)', function() {
  describe('valid source code: "[[abc]][({Andre Stackhouse})]0"', function() {
    it('should return 6 when the caret index is 0', function() {
      let valid_source_code = '[[abc]][({Andre Stackhouse})]0';
      chai.assert.equal(6, corresponding_bracket_index(valid_source_code, 0));
    });
  });
});
