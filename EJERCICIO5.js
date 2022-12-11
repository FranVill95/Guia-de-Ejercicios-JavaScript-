/*Ejercicio 5: Crear una function que tenga 2 parámetros y asignarle números enteros 
para calcular cual número es el mayor */

function mayor(num1, num2) {
    if (num1 > num2) {
        console.log("El primer numero =", num1, " es mayor")
    } else {
        console.log("El segundo numero =", num2, " es mayor")
    } 
}
mayor(90,65)