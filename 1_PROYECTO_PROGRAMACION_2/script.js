const formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const nombreUsuario = formulario.querySelector('input[type="text"]').value;
    const contrasena = formulario.querySelector('input[type="password"]').value;
    if (nombreUsuario.trim() !== '' && contrasena.trim() !== '') {
        window.location.href = "Dashboar.html";
    } else {
        alert('Por favor, ingresa un nombre de usuario y contraseña.');
    }
});
