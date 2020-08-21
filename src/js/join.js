$(document).ready(function() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyzmb8K5jIXub2vTD7niancYYBCv7tI8g1CNtuBbiPyH3KaDYKW/exec'
    const form = document.forms['google-sheet']

    form.addEventListener('submit', e => {
        // $("form[name='google-sheet']").validate();
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Your Application is Submitted!"))
        .catch(error => console.error('Error!', error.message))
    })
});
