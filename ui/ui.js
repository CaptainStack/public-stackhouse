$(() => {
  $('select').change(() => {
    let fn = window[$("select option:selected").text()];
    $('code').text(fn.toString());
    Prism.highlightAll();
  });
});
