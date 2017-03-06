function magic_index(array) {
  // A magic index in an array A[0 ... n-1] is defined to be an index such that A[i] = i. Given a sorted 
  // array of distinct integeres, write a method to find a magic index, if one exists in array A. 
  // FOLLOW UP What if the values are not distinct?
  
  let magic_index_helper = (array, index) => {
    let value_at_index = array[0];
    if (value_at_index === index) {
      return index;
    } else if (array.length === 0) {
      return -1;
    } else {
      if (value_at_index > index) {
        return magic_index_helper(array.slice(value_at_index - index), value_at_index);
      } else {
        return magic_index_helper(array.slice(1), index + 1);
      }
    }
  }
  return magic_index_helper(array, 0);
}
