//2.	Pedir dos palabras y presentarlas concatenadas
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: palabra1=""(leer), palabra2=""(leer),concatenar(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: concatenar=palabra1+palabra2
// La informacion de las variables procesadas
// Salida: concatenar
// Seupdocodigo:
// InicioAlgoritmo unir
//   declarar palabra1="",palabra2="",concatenar=""
//   Escribir "Ingrese palabra1"
//   Leer palabra1
//   Escribir "Ingrese palabra2"
//   Leer palabra2
//   concatenar=palabra1+palabra2
//   Escribir concatenar
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// se crea la funcion
function unir() {
   let palabra1="",palabra2="",concatenar=""
   palabra1 = read("Ingrese palabra1:")
   palabra2 = read("Ingrese palabra2:")
   concatenar=palabra1+" "+palabra2
   write(concatenar)
}
// se llama o se ejecuta la funcion
unir();