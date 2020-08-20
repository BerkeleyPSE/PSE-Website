$(document).ready(function() {
    var typed = new Typed('#typed', {
      strings: ['CREATIVE.', 'PROFESSIONAL.', 'A FAMILY.', 'PI SIGMA EPSILON.'],
      smartBackspace: true,
      typeSpeed: 100,
      startDelay: 500,
      backDelay: 700
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbx3WkdOUt9YAbXks0Ed3guBapQbcfktYE9GqD2tO0mYQSYzQtC_/exec'
    const form = document.forms['submit-to-google-sheets']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => alert('Success!', response))
          .catch(error => alert('Error!', error.message))
    })
});
