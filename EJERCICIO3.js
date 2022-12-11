/*Ejercicio 3: Determinar la nota final de un alumno, la cual depende de lo siguiente: Examen =20% , tareas 40%, 
asistencia =10% e investigación =30% , al final deberá mostrar los datos del alumno , nombre , carnet 
y nota final. Para este ejercicio deberá de utilizar una fuction y asignar parámetros para llenar los valores.*/

function notaFinal(nombre, carnet,evaExam,evaHomework,evaAsis,evaResearch) {

    evaExam = evaExam * 0.2
    evaHomework = evaHomework * 0.4
    evaAsis = evaAsis * 0.1
    evaResearch = evaResearch * 0.3
    finalAverage = (evaExam + evaHomework + evaAsis + evaResearch);
    console.log("Nombre del estudiante: "+ nombre +"\n" + "Carnet: "+ carnet)
    console.log("La nota final del estudiante es: "+ finalAverage.toFixed(2))
}
notaFinal("Francisco Villalobos", "75-4537-2022",9,7,8,9)