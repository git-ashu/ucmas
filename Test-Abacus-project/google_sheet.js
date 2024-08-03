const scriptURL = 'https://script.google.com/macros/s/AKfycbxBXQmTdC0_Y3jZatXSXVYjwbMc53FAD5mGuhmYyuuFHJ85JmPPS33IcTnSBD2KXdfQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})