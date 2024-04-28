// 3.	Pedir al usuario un número y mostrar si es par o impar.
// Analisis de requerimientos
// Entrada: numero=0(leer),reciduo=0(calcular)
// Proceso: recidio = numero % 2
//      si reciduo==0 entonces
//         escribir "El numero", numero, "es par."
//      sino
//         escribir "El numero", numero, "es impar."
//      finsi
//      Escribir "gracias por verificar su número."
// Salida: Mostrar el mensaje

// Pseudocodigo
// InicioAlgoritmo ejercicio_3
//   declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero:"
//   leer numero
//   reciduo = numero % 2
//   si reciduo==0 entonces
//     escribir "El numero es par"
//   sino
//     escribir "El numero es impar"
//   finsi
//   escribir "gracias por su visita..."
// finAlgoritimo

const prompt = require('prompt-sync')();
const write = console.log
function ejercicio_3(){
    let numero = 0, reciduo = 0
    numero = prompt("Ingrese numero: ")
    numero = parseInt(numero)
    reciduo = numero % 2
    if (reciduo == 0) {
      write("El número", numero, "es par.")
    }  
    else{
      write("El número", numero, "es impar.")
    }
    write("gracias por su verificar su número.")
  }
  ejercicio_3();