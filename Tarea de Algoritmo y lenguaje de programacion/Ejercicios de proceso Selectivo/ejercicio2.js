// 2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
// Entrada: edad=0(leer)
// Proceso:Leer edad
//         Si edad > 18 entonces
//          Escribir "Usted es mayor de edad."
//         Sino
//          Escribir "Lo sentimos, Usted es menor de edad."
//         FinSi
// Salida: edad

// Pseudocodigo:
// InicioALgoritmo ejercicio_2
//  Escribir "Ingrese su edad:"
//   Leer edad
//  Si edad > 18 entonces
//   Escribir "Usted es mayor de edad."
//  Sino
//   Escribir "Lo sentimos, Usted es menor de edad."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const read = console.log

function ejercicio_2(){
    let edad = Number(prompt('Ingrese su edad:'));

    if(edad >= 18){
        read('Usted es mayor de edad.');
    }
    else{
        read('Lo sentimos, Usted es menor de edad.');
    }
}

ejercicio_2();