describe('string_compression_test', () => {
  describe('compressable_strings', () => {
    it('should return "a3b1c5a3" for "aaabcccccaaa"', () => {
      chai.assert.deepEqual(string_compression('aaabcccccaaa'), 'a3b1c5a3');
    });
    it('should return "r2e2d3i2t2" for "rreedddiitt"', () => {
      chai.assert.deepEqual(string_compression('rreedddiitt'), 'r2e2d3i2t2');
    });
  });
  describe('uncompressable_strings', () => {
    it('should return "andre" for "andre"', () => {
      chai.assert.deepEqual(string_compression('andre'), 'andre');
    });
    it('should return "" for ""', () => {
      chai.assert.deepEqual(string_compression(''), '');
    });
  });
});
