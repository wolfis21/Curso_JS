//funciones


//======= funciones declarativas

// function nombreFuncion(){
//     //cuerpo
// }

function saludar(){
    console.log('Hola mundo');
}
saludar();

//con parametro

function saludoA(name){
    console.log('Hola', name);
}
saludoA('Isaac');

//con retorno
function saludar(name){
    return `Hola soy: ${name}`;
}

var respuesta = saludar('isaac');
console.log(respuesta);

console.log(saludar('Isaac'));

// ==== funciones de expresion
//funcion anonima
var suma = function(a,b){
    return  a + b;
}
console.log(suma(2, 3));

// funcion flecha arrow function

var restar = (a,b) => {
    return a-b;
}
console.log(restar(2,2));

var multiplicar = (a,b) => a*b;

console.log(multiplicar(2,3));
