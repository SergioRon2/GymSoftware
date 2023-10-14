
let clientes = document.querySelectorAll('.list-group-item');
let filtros = document.querySelectorAll('.form-control');
  
filtros.forEach(filtro => {
    filtro.addEventListener('input', function() {
        let filtroTexto = filtro.value.toLowerCase();
  
        clientes.forEach(cliente => {
            let clienteTexto = cliente.textContent.toLowerCase();
  
            if (clienteTexto.includes(filtroTexto)) {
                cliente.style.display = 'block';
            } else {
                cliente.style.display = 'none';
            }
        });
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
