//tipos de datos

// numero = number

console.log(23);
console.log(3.1416);

//string = string

console.log("Isaac Saado");
console.log("Alejandro Mathison");

//logicos = booleans

console.log(true);
console.log(false);

//indefenidos =  undefined

console.log(undefined);

//null

console.log(null);

// Tipos de datos estructurales

//Objeto - object

console.log({
  nombre: "Isaac",
  edad: 21,
  fechaDeNacimiento: null,
  esAlto: false,
});
//2da forma de creacion de objeto
var objeto = {
  nombre : "Juan",
  apellido : "Perez",
  telefono : "892384" 
}
console.log(objeto);

//tipo de datos de lista (array)
console.log(["Mexico", "Vnzla", "peru"]);

console.log([21, true, { nombre: "Isaac" }, [1, 2, 3, 4, 5, 6]]);

// Variable de tipo Symbol

var simbolo= Symbol("mi simbolo");
console.log(simbolo);

//tipo de datos de clasee de function
class Persona{
  constructor(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
  }
}
console.log(typeof Persona);


