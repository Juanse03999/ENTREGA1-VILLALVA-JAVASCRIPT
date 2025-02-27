// Iniciamos el SIMULADOR DE DESCUENTOS con un botón.
document.getElementById("btnIniciar").addEventListener("click", ejecutarSimulador);



function ejecutarSimulador() {

    alert("¡BIENVENIDO AL SIMULADOR DE DESCUENTOS!");

    let numero;

    do {
        let precio = prompt("⬇ Ingresá el precio de tu producto a continuación ⬇");

        if (precio === null) {
            alert("Operacion cancelada. 🫤");
            return;
        }

        numero = parseFloat(precio);

        if (isNaN(numero)) {
            alert("Error: Debes ingresar un número válido.");
        }
    } while (isNaN(numero));

    alert("El precio de tu producto es de: $" + numero);
}


