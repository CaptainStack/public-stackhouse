describe('string_compression_test', function() {
  describe('compressable_strings', function() {
    it('should return "a3b1c5a3" for "aaabcccccaaa"', function() {
      chai.assert.deepEqual(string_compression('aaabcccccaaa'), 'a3b1c5a3');
    });
    it('should return "r2e2d3i2t2" for "rreedddiitt"', function() {
      chai.assert.deepEqual(string_compression('rreedddiitt'), 'r2e2d3i2t2');
    });
  });
  describe('uncompressable_strings', function() {
    it('should return "andre" for "andre"', function() {
      chai.assert.deepEqual(string_compression('andre'), 'andre');
    });
    it('should return "" for ""', function() {
      chai.assert.deepEqual(string_compression(''), '');
    });
  });
});
