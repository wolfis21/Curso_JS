//Escribir un programa que calcule 
//el número de segundos que existen en un día.

var segundos = 0;
const dia = 24;

// 1 hora tiene 60min  y 1 min 60 segundos
// 60 * 60 = 3600seg === 1 hora

segundos = 3600;
segundos *= dia;

console.log(segundos);