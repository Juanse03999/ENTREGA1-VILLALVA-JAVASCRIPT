// Iniciamos el SIMULADOR DE DESCUENTOS con un botón.
document.getElementById("btnIniciar").addEventListener("click", ejecutarSimulador);


function ejecutarSimulador() {

    console.log("Se ejecuta el simulador.");
    alert("¡BIENVENIDO AL SIMULADOR DE DESCUENTOS!");

    let precio;

    do {
        console.log("Esperando a que el usuario ingrese el precio de su producto.");
        precio = prompt("⬇ Ingresá el precio de tu producto a continuación ⬇");

        if (precio === null) {
            console.log("Se cancela la operación.");
            alert("Operacion cancelada. 🫤");
            console.clear();
            return;
        }

        precio = parseFloat(precio);

        if (isNaN(precio)) {

            console.log("Se ingresó un número no válido.");
            alert("Error: Debes ingresar un número válido.");

        }
    } while (isNaN(precio));

    alert("El precio de tu producto es de: $" + precio);

    
    //  ARRAY DE DESCUENTOS:
    const descuentosDisponibles = [10, 20, 30, 40, 50];

    //  MUESTRA LISTA DE DESCUENTOS DISPONIBLES:
    let mensaje = "Descuentos disponibles:\n\n";

    for (let i = 0; i < descuentosDisponibles.length; i++) {

        mensaje += `(${i + 1}) ${descuentosDisponibles[i]}%    `;

    }



    //  MUESTRA LA LISTA EN UNA ALERTA:
    let opcion = parseInt(prompt(mensaje + "\n\nElige una opción (1-5):"));


    // Validar que la opción elegida sea válida
    while (isNaN(opcion) || opcion < 1 || opcion > descuentosDisponibles.length) {

        alert("Opción inválida. Seleccione un número de la lista.");
        opcion = parseInt(prompt(mensaje + "\n\nElige una opción (1-5):"));

    }
    
    // Obtenemos el porcentaje de descuento seleccionado
    let descuentoElegido = descuentosDisponibles[opcion - 1];

    // Calculamos el precio final con el descuento aplicado
    let precioFinal = parseFloat(precio) - (parseFloat(precio) * (descuentoElegido / 100));

    // Mostramos el resultado
    alert(`Precio original: $${precio.toFixed(2)}\nDescuento aplicado: ${descuentoElegido}%\nPrecio final: $${precioFinal.toFixed(2)}`);

    
    
    
    
    
    
    
    
    
    
    
    
    
    


























}


