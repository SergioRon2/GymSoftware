document.addEventListener('DOMContentLoaded', function() {
    const mail = document.getElementById('InputEmail1');
    const password = document.getElementById('InputPassword1');
    const boton = document.getElementById('ingresar');


  
    boton.addEventListener('click', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe por defecto
  
      if (mail.value === 'admin@admin.com' && password.value === 'admin12345') {
        window.location.href = 'main.html';
      } else{
        window.location.href = 'index.html';
      }
    });
  });
  

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
  