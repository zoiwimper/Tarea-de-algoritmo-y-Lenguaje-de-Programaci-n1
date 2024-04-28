// 9.	Solicitar al usuario un número y mostrar si es divisible por 2.
// Entrada: numero=0(leer), reciduo=0(calcular)
// Proceso: reciduo = numero % 2
//          si reciduo == 0 entonces
//            Escribir "El número es múltiplo de 2."
//          Sino
//            Escribir "El número no es múltiplo de 2."
//          FinSi
// Salida: Mostrar el mensaje

// Pseudocódigo:
// InicioAlgoritmo ejercicio_9
//  Escribir "Inserte un número para verificar si es múltiplo de 2: "
//  Leer numero
//  reciduo = numero % 2
//  Si reciduo == 0 entonces
//    Escribir "El número es múltiplo de 2."
//  Sino 
//    Escribir "El número no es múltiplo de 2."
//  FinSi
//  Escribir "La verificación ha sido éxitosa, gracias por su visita."
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function ejercicio_9(){
    let numero = 0, reciduo = 0
    numero = prompt("Inserte un número para verificar si es múltiplo de 2:")
    numero = parseInt(numero)
    reciduo = numero % 2
    if (reciduo == 0){
        write(numero,"es múltiplo de 2.")
    }
    else{
        write(numero,"no es múltiplo de 2.")
    }
    write("La verificación ha sido éxitosa, gracias por su visita.")
}

ejercicio_9();