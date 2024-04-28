// 13. Dado un arreglo de 5 nombres y presentarlos todos.
// Entrada:Definir yo Como Cadena
// Proceso:Para i<-0 Hasta 4 Hacer
//          Escribir 'NOMBRES'
//          Leer yo
//          arreglo<-numero
//         FinPara
// Salida: mostrar mensaje

// Pseudocodigo:
// InicioAlgoritmo ejercicio_13
//  Definir yo Como Cadena
//  Para i<-0 Hasta 4 Hacer
//   Escribir 'NOMBRES'
//   Leer yo
//   arreglo<-numero
//  FinPara
// FinAlgoritmo

const prompt = require('prompt-sync')();

function _ejercicio_13(){
    const arreglo = []
    for (let i = 0; i < 5; i++) {
        const yo = prompt("Ingrese un nombre:");
        arreglo.push(yo)
    }
    console.log(arreglo)
}

_ejercicio_13();