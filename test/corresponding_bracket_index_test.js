describe('corresponding_bracket_index_test', function() {
  describe('valid_source_code', function() {
    it('should return 6 when the caret index is 0', function() {
      chai.assert.equal(corresponding_bracket_index(valid_source_code, 0), 6);
    });

    it('should return 0 when the caret index is 6', function() {
      chai.assert.equal(corresponding_bracket_index(valid_source_code, 6), 0);
    });

    it('should return 26 when the caret index is 9', function() {
      chai.assert.equal(corresponding_bracket_index(valid_source_code, 9), 26);
    });

    it('should return 8 when the caret index is 27', function() {
      chai.assert.equal(corresponding_bracket_index(valid_source_code, 27), 8);
    });
  });

  describe('invalid_source_code', () => {
    it('should throw "invalid brackets in source code" on improper nesting', function() {
      chai.assert.throws(() => { corresponding_bracket_index(improper_nesting, 2) }, Error, 'Invalid brackets in source code.');
    });

    it('should throw "invalid brackets in source code" on incorrect closing bracket', function() {
      chai.assert.throws(() => { corresponding_bracket_index(wrong_closing_bracket, 2) }, Error, 'Invalid brackets in source code.');
    });

    it('should throw "Unclosed brackets in source code" on unclosed bracket', function() {
      chai.assert.throws(() => { corresponding_bracket_index(unclosed_bracket, 2) }, Error, 'Unclosed brackets in source code.');
    });

    it('should throw "Invalid caret index. Caret must point to a bracket" if no braces', function() {
      chai.assert.throws(() => { corresponding_bracket_index(no_braces, 2) }, Error, 'Invalid caret index. Caret must point to a bracket.');
    });

    it('should throw "Invalid caret index. Caret must point to a bracket" on invalid caret index', function() {
      chai.assert.throws(() => { corresponding_bracket_index(valid_source_code, 2) }, Error, 'Invalid caret index. Caret must point to a bracket.');
    });
  });
});
