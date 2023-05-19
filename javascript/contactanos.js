const form = document.querySelector('#formulario-contacto');
const mensajeError = document.querySelector('#mensaje-error');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const fechaNacimiento = document.querySelector('#fecha-nacimiento').value;
    const email = document.querySelector('#email').value;
    const titulo = document.querySelector('#titulo').value;
    const mensaje = document.querySelector('#mensaje').value;

    if (nombre === '' || apellido === '' || fechaNacimiento === '' || email === '' || titulo === '' || mensaje === '') {
        mensajeError.textContent = 'Quedan campos del formulario por completar.';
        setTimeout(() => {
            mensajeError.textContent = '';
        }, 10000);
        return;
    }

    const mensajeExito = document.createElement('p');
    mensajeExito.textContent = 'Enviado correctamente. Muchas gracias!';
    form.appendChild(mensajeExito);
    setTimeout(() => {
        mensajeExito.textContent = '';
    }, 10000);

    form.reset();
});