const filtro = document.getElementById('filtro');
const elementos = document.querySelectorAll('.list-group-item');

filtro.addEventListener('input', function () {
    const filtroTexto = filtro.value.trim().toLowerCase();

        elementos.forEach(elemento => {
            const contenido = elemento.textContent.trim().toLowerCase();
            if (contenido.includes(filtroTexto)) {
                elemento.style.display = 'block';
            } else {
                elemento.style.display = 'none';
            }
        });
});

let formulario = document.getElementById('formulario');
let body = document.getElementById('body');

formulario.addEventListener('mouseover', function() {
  body.style.backdropFilter = 'brightness(.3)';
});

formulario.addEventListener('mouseout', function() {
  body.style.backdropFilter = 'none';
});
