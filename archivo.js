var usuarios = [
    { nombre: "viviana ramirez", pin: "041016", saldo: 800 },
    { nombre: "brillid bedoya", pin: "098765", saldo: 990 },
    { nombre: "Yolanda bedoya", pin: "123456", saldo: 770 }
];

let usuarioActual = null;
function iniciarSesion() {
    let pinIngresado = document.getElementById("pin").value;
    let usuarioEncontrado = usuarios.find(user => user.pin === pinIngresado);
    if (usuarioEncontrado) {
        usuarioActual = usuarioEncontrado;
        document.getElementById("nombreUsuario").innerText = usuarioActual.nombre;
        document.getElementById("saldo").innerText = usuarioActual.saldo;
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("transacciones").style.display = "block";
    } else {
        alert("PIN incorrecto. Inténtelo nuevamente.");
    }
}
function cerrarSesion() {
    usuarioActual = null;
    document.getElementById("loginForm").reset();
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("transacciones").style.display = "none";
    document.getElementById("monto").value = "";
}
function retirar() {
    if (!usuarioActual) {
        alert("Debe iniciar sesión para realizar esta operación.");
        return;
    }
    let monto = parseInt(document.getElementById("monto").value);
    if (monto > usuarioActual.saldo) {
        alert("No tiene suficiente saldo para realizar esta operación.");
    } else if (monto <= 0) {
        alert("El monto debe ser mayor que cero.");
    } else {
        usuarioActual.saldo -= monto;
        document.getElementById("saldo").innerText = usuarioActual.saldo;
        alert("Retiro exitoso. Retiró: $" + monto);}}