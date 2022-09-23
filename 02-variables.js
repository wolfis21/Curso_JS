
// hay tres formas de definir variables

// var
// let
// const

//variables con VAR

var nombre='Alejandro'; 
var x = 2;

console.log(nombre);
console.log(x);

var persona = {
    nombre:'Isaac',
    apellido:'Saado',
    edad: '21',
    direccion: {
        calle:'vacia',
        nCasa:123,
    }
}

var ciudad;
ciudad = 'san felix' //primer define este
ciudad = 'PZO' //luego cambia en linea
ciudad = 23 //luego termina en ultima definicion
console.log(ciudad);

//variabes con LET

let nombre1 = "gabriel";
console.log(nombre1);

//demostracion que el let se usa de manera local dentro de un bloque
//estos estan entre { }
{
    let	 saludo= 'buenas tardes';
    console.log(saludo);
}
console.log(saludo);

// variables con CONST

const PI = 3.1416 //su nombre siempre en mayuscula
console.log(PI);


//los templates

var nombre='Alejandro';
var saludo= `Hola soy ${nombre}

como estas?`;
console.log(saludo);
