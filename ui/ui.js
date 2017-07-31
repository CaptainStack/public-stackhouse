document.addEventListener('DOMContentLoaded', () => {
  // Watch for a problem being selected from the select input. Look up selected solution and 
  // display it in the code container.
  let problem_select = document.querySelector('select');
  let selected_option;
  let all_tests_button = document.querySelector('#all-tests-button');
  problem_select.addEventListener('change', () => {
    selected_option = problem_select[problem_select.selectedIndex].innerText;
    let fn = window[selected_option];
    document.querySelector('code').textContent = fn.toString();
    Prism.highlightAll();
  });

  // Watch for clicks on the 'run mocha tests' button and run them when clicked.
  all_tests_button.onclick = () => {
    mocha.run();
    all_tests_button.disabled = true;
    all_tests_button.title = "Refresh page to run Mocha tests again.";
  };
}, false );
