document.addEventListener( 'DOMContentLoaded', function () {
  document.querySelector('select').onchange = () => {
    let fn = window[$("select option:selected").text()];
    document.querySelector('code').innerText = fn.toString();
    Prism.highlightAll();
  };

  document.querySelector('button').onclick = () => {
    mocha.run();
  };
}, false );
