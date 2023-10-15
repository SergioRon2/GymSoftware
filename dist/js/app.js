let formulario = document.getElementById('formulario');
let body = document.getElementById('body');

formulario.addEventListener('mouseover', function() {
  body.style.backdropFilter = 'brightness(.3)';
});

formulario.addEventListener('mouseout', function() {
  body.style.backdropFilter = 'brightness(.7)';
});
