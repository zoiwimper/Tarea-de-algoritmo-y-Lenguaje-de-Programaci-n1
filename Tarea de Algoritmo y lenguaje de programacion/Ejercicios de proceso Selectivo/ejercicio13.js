// 13.	Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
// Entrada: precio_producto=0(leer), porcentaje_descuento=0(leer), descuento(calcular)
// Proceso:descuento = (precio_producto * porcentaje_descuento)/100
//         precio_final = precio_producto - porcentaje_descuento
//         Escribir "El precio final luego de aplicar el descuento del", porcentaje_descuento, "%, es: ", precio_final
//         Escribir "Gracias en su confiabilidad en nosotros para verificar su descuento."
// Salida: precio_final

// Pseudocódigo:
// InicioAlgoritmo ejercicio_13
//  Escribir "Ingresa el precio del producto a verificar su descuento: "
//  Leer precio_producto
//  Escribir "Ahora de igual manera, ingresa el porcentaje del descuento aplicado al producto: "
//  Leer porcentaje_descuento
//  descuento = (precio_producto * porcentaje_descuento)/100
//  precio_final = precio_producto - porcentaje_descuento
//  Escribir "El precio final luego de aplicar el descuento del", porcentaje_descuento, "%, es: ", precio_final
//  Escribir "Gracias en su confiabilidad en nosotros para verificar su descuento."
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function ejercicio_13(){
    let precio_producto = Number(prompt("Ingresa el precio del producto a verificar su descuento: "))
    let porcentaje_descuento = Number(prompt("Ahora de igual manera, ingresa el porcentaje del descuento aplicado al producto: "))
    let descuento = (precio_producto * porcentaje_descuento)/100
    let precio_final = precio_producto - porcentaje_descuento
    write("El precio final luego de aplicar el descuento del", porcentaje_descuento, "%, es: ", precio_final)
    write("Gracias en su confiabilidad en nosotros para verificar su descuento.")
}

ejercicio_13();