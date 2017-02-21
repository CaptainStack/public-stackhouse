// This is a custom implementation of a JavaScript Promise for studying purposes.

const Promise = {
  defer: () => {
    let errored = false;
    let resolved = false;
  	let completed = false;
    let payload;

    return {
      resolve: data => {
        resolved = true;
        payload = data;
      },
      reject: error => {
        errored = true;
        payload = error;
      },
      promise: {
        then: function(on_success) {
          let interval = setInterval(function() {
            if (resolved && !completed) {
              on_success(payload);
              clearInterval(interval);
              completed = true;
              return this;
            }
          }.bind(this), 1000);
          return this;
        },
        catch: on_fail => {
          let interval = setInterval(() => {
            if (errored && !completed) {
              on_fail(payload);
              completed = true;
              clearInterval(interval);
            }
          }, 1000);
        }
      }
    }
  }
}
