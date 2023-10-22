let formulario = document.getElementById('formulario');
let body = document.getElementById('body');

formulario.addEventListener('mouseover', function() {
  body.style.backdropFilter = 'brightness(.3)';
});

formulario.addEventListener('mouseout', function() {
  body.style.backdropFilter = 'brightness(.7)';
});


window.addEventListener("load", function() {
  // Cuando la página se carga completamente, oculta la animación de carga.
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".content").style.display = "block";
});
