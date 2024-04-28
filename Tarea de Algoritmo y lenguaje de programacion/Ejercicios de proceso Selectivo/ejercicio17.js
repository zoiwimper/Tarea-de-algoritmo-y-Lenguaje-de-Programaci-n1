// 17.La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
// Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
// Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
// Realice un algoritmo para determinar la ganancia obtenida.

// Entrada:Proceso de ganancia_productor
//         Definir tipo_banano, tamaño_banano, precio_inicial, precio_final, cantidad_kilos, ganancia Como Real
// Proceso:Escribir "Inserte el tipo de banano (A o B): "
//         Leer tipo_banano
//         Escribir "Digite el tamaño del banano (1 o 2): "
//         Leer tamaño_banano
//         Escribir "Ingrese el precio inicial por kilo de banano:"
//         Leer precio_inicial
//         Si tipo_banano = "A" entonces
//          Si tamaño_banano = 1 entonces
//           precio_final = precio_inicial + 2
//         Sino
//           precio_final = precio_inicial + 3
//         FinSi
//           Sino
//           Si tamaño_banano = 1 entonces
//             precio_final = precio_inicial - 3
//          Sino
//             precio_final = precio_inicial - 5
//           FinSi
//         FinSi
//         Escribir "Ingrese la cantidad de kilos entregados en el embarque: "
//         Leer cantidad_kilos
//         ganancia = precio_final * cantidad_kilos
//         Escribir "La ganancia total obtenida es: ", ganancia
// Salida: ganancia

// Pseudocodigo:
// InicioAlgoritmo ejercicio_17
//  Proceso de ganancia_productor
//  Definir tipo_banano, tamaño_banano, precio_inicial, precio_final, cantidad_kilos, ganancia Como Real
//  Escribir "Inserte el tipo de banano (A o B): "
//  Leer tipo_banano
//  Escribir "Digite el tamaño del banano (1 o 2): "
//  Leer tamaño_banano
//  Escribir "Ingrese el precio inicial por kilo de banano:"
//  Leer precio_inicial
//  Si tipo_banano = "A" entonces
//   Si tamaño_banano = 1 entonces
//    precio_final = precio_inicial + 2
//  Sino
//    precio_final = precio_inicial + 3
//  FinSi
//    Sino
//    Si tamaño_banano = 1 entonces
//      precio_final = precio_inicial - 3
//    Sino
//      precio_final = precio_inicial - 5
//    FinSi
//  FinSi
//  Escribir "Ingrese la cantidad de kilos entregados en el embarque: "
//  Leer cantidad_kilos
//  ganancia = precio_final * cantidad_kilos
//  Escribir "La ganancia total obtenida es: ", ganancia
// FinProceso
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function ejercicio_17(){
    let tipo_banano = prompt("Inserte el tipo de banano (A o B): ");
    let tamaño_banano = prompt("Digite el tamaño del banano (1 o 2): ");
    let precio_inicial = prompt("Ingrese el precio inicial por kilo de banano:");
    let precio_final = 0.0, cantidad_kilos = 0, ganancia = 0.0
    precio_inicial = parseFloat(precio_inicial);
    if (tipo_banano == "A") {
        if (tamaño_banano == 1) {
            precio_final = precio_inicial + 2;
        } else if (tamaño_banano == 2) {
            precio_final = precio_inicial + 3;
        }
    } else if (tipo_banano == "B") {
        if (tamaño_banano == 1) {
            precio_final = precio_inicial - 3;
        } else if (tamaño_banano == 2) {
            precio_final = precio_inicial - 5;
        }
    }

    cantidad_kilos = prompt("Ingrese la cantidad de kilos entregados en el embarque: ");
    cantidad_kilos = parseFloat(cantidad_kilos);
    ganancia = precio_final * cantidad_kilos;
    write("La ganancia total obtenida es: ", ganancia);
}

ejercicio_17();