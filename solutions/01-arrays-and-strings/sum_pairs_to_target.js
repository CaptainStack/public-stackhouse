function sum_pairs_to_target(values, target) {
  // Find all pairs of integers in an array that sum up to a given value. 
  // Values in the integer array may repeat.

  // Example: [1,2,3,5,6], target value = 8
  // Answer:
  // 3 + 5 = 8
  // 2 + 6 = 8

  // Build a map of <values, instances of each value>
  let value_map = new Map();
  for (let value of values) {
    let quantity = value_map.get(value) || 0;
    value_map.set(value, quantity + 1);
  }

  // Iterate through the unique values
  for (let value of value_map.keys()) {
    let search_value = target - value;
    let quantity = value_map.get(value) || 0;

    // Decrement the quantity of each value in the map as they are used
    value_map.set(value, quantity - 1);
    let search_value_quantity = value_map.get(search_value);

    // Log the combination if a corresponding value is found. Decrement the found value's quantity.
    if (search_value_quantity > 0) {
      value_map.set(search_value, search_value_quantity - 1);
      console.log(`${value} + ${search_value} = ${target}`);
    }
  }
}
