function match_query(words, query) {
  let result = [];

  let query_components = query.split('?');

  words.filter(word => {
    let word_copy = word;
    if (word.length !== query.length) {
      return false;
    } else {
      for (let component of query_components) {
        if (component === '') {
          word_copy.slice(1, word_copy.length);
        } else {
          if (word_copy.indexOf(component) !== 0) {
            return false;
          }
        }
      }
      return true;
    }
  });

  return result;
}


function getAllKeys() {
  return(fs.ls);
}

function removeItem(key) {
  fs.remove(key);
  console.log('Deleted');
}

function setItem(key, value, callback) {
  operations.add_operation_to_queue(fs.writeFile(hash(key), value)
    .done(result => {
      callback(); 
      return result 
    })
  );
}

function execute_file_operations(operations) {
  for (operation of operations) {
    operation().done(() => {
      continue;
    });
  }
}

function add_operation_to_queue(key, value, operation) {
  operations.push(setItem(key, value, print_result));
}

function execute_operations() {
  while (!operations.empty()) {
    execute_file_operations(operations);
  }
}