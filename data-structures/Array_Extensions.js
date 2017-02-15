Array.prototype.peek = function() { return this[this.length - 1] };
Array.prototype.isEmpty = function() { return this.length < 1 };
Array.prototype.swap = function(index1, index2) { let temp = this[index1]; this[index1] = this[index2]; this[index2] = temp };
