let form = document.getElementById('source');
let target = document.getElementById('target');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  let firstname = form.elements['firstname'].value;
  let lastname = form.elements['lastname'].value;

  target.textContent = 'Your name is ' + firstname + ' ' + lastname + '.';
});
