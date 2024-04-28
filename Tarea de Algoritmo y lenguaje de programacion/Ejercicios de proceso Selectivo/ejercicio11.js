// 11.	Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// Entrada: numero=0(leer), numero >= -9, numero <= 9
// Proceso:Si numero >= -9 y numero <= 9 entonces
//           Escribir "El número digitado", numero, "es un número de un sólo dígito."
//         Sino
//           Escribir "El número digitado", numero, "no es un número de un sólo dígito."
//         FinSi
// Salida: numero

// Pseudocodigo:
// InicioAlgoritmo ejercicio_11
//  Escribir "Digite un número: "
//  Leer numero
//  Si numero >= -9 y numero <= 9 entonces
//    Escribir "El número digitado", numero, "es un número de un sólo dígito."
//  Sino
//    Escribir "El número digitado", numero, "no es un número de un sólo dígito."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function ejercicio_11(){
    let numero = parseInt(prompt("Digite un número: "))
    if (numero >= -9 && numero <= 9){
        write("El número digitado", numero,"es un número de un sólo dígito.")
    }
    else{
        write("El número digitado", numero,"no es de un número de un sólo dígito.")
    }
}

ejercicio_11();