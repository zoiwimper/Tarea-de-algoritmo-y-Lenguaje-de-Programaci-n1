// 15.	Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
// Entrada: precioVenta=0.0(leer), aniofabricacion=0(leer), descuento=0(calcular), precio_final=0(calculado)
// Proceso: Si aniofabricacion < 2010
//          entonces
//            descuento = precioVenta*0.10
//          sino
//            descuento = 0
//          FinSi
//          precio_final = precioVenta - descuento
// Salida: precio_final

// Pseudocodigo:
// InicioAlgoritmo ejercicio_15
//  Declarar precioVenta=0.0, aniofabricacion=0, descuento=0, precio_final=0
//  Escribir "Ingrese precio de venta: "
//  Leer precioVenta
//  Escribir "Ingresa el año de fabricación: "
//  Leer aniofabricacion
//  Si aniofabricacion < 2010
//   entonces
//     descuento = precioVenta*0.10
//   sino
//     descuento = 0
//   FinSi
//  precio_final = precioVenta - descuento
//  Escribir precio_final
// FinAlgoritmo

const  prompt = require('prompt-sync')();
const write = console.log

function ejercicio_15(){
    let precioVenta=0.0, anioFabricacion=0, descuento=0, precio_final=0.0
    precioVenta = prompt("Ingrese precio de venta: ")
    precioVenta = parseFloat(precioVenta)
    anioFabricacion = prompt("Ingresa el año de fabricación: ")
    anioFabricacion = parseInt(anioFabricacion)
    if (anioFabricacion < 2010){
        descuento = precioVenta*0.10
    }
    else{
        descuento = 0
    }
    precio_final = precioVenta - descuento
    write(`Precio Venta: ${precioVenta} - Descuento:${descuento}: Precio Final=${precio_final}`)
}
ejercicio_15();