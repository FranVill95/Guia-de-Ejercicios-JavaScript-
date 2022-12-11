// Ejercicio 1: Crear una función con un parámetro llamado edad que permita calcular si una persona es mayor de 
//edad o no. Utilizar para la condición el operador ternario. 
/*var x = 10;  var y = 8; mayor = (x>y)?x:y; console.log("El mayor de los dos números es " + mayor);*/

function calculo_edad(edad){
    (edad>=18)?edad:18;
    console.log("Es mayor de edad")
}

calculo_edad(8)