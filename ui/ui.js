document.addEventListener('DOMContentLoaded', () => {
  // Watch for a problem being selected from the select input. Look up selected solution and 
  // display it in the code container.
  let problem_select = document.querySelector('select');
  problem_select.addEventListener('change', () => {
    let fn = window[problem_select[problem_select.selectedIndex].innerText];
    document.querySelector('code').innerText = fn.toString();
    Prism.highlightAll();
  });

  // Watch for clicks on the 'run mocha tests' button and run them when clicked.
  document.querySelector('button').onclick = () => {
    mocha.run();
  };
}, false );
