// Operadores

//-------------------------Operador de asignacion

var x = 2;
var y = true;

//Operador de asignacion de adicion (+=)

var x = 2;
var y = 1;

x+=y;
console.log(x);

//Operador de asignacion de sustracion (-=)

var x = 2;
var y = 1;

x-=y;
console.log(x);

//Operador de asignacion de multiplicacion (*=)

var x = 2;
var y = 1;

x*=y;
console.log(x);
//Operador de asignacion de division (/=)

var x = 9;
var y = 2;

x/=y;
console.log(x);

//Operador de asignacion de resto (%=)

var x = 1;
var y = 2;

x%=y;
console.log(x);

//Operador de asignacion de exponenciacion (**=)

var x = 2;
var y = 3;

x**=y;
console.log(x);

//------------------------- Operadores de Comparacion

// Operador igual (==)
console.log(2 == 2);
console.log(2 == '2'); //OJO ACA

//Operador no es igual a (!=)
console.log (2 != 2);

//Operador es estrictamente igual a (===)
console.log (4 === 4);
console.log (4 === '4'); //OJO podemos usar esto asi
                            //para condicionar mejor

//Operador es estrictamente desigual a (!==)
console.log (4 !== 4);
console.log (4 !== '4'); //mejor usar esto para condicionar

//Operadores >, <, <=, >=
console.log(3 > 4);
console.log(2 < 3);
console.log(4 >= 2);
console.log(2 <= 5);

//----------------------------Operadores aritmeticos

// - + * / % **

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

// Operadores de incremeto (++)

var num = 0;
console.log(++num);

// Operadores de decremeto (--)

var num = 0;
console.log(--num);

//------------------------------Operadores Logicos

// AND &&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(2<3 && 4>1);

// OR ||
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(2<3 || 4<2);

// NOT
console.log(!true);
console.log(!false);

//------Operador de cadena o concatenacion (+)

var name = "Isaac";
var subname = "Saado";
var nameComplet = name +" "+subname;

console.log(nameComplet);

//------Operador de condicional ( condicion ? valor1 : valor 2)

console.log(2 > 3 ? 'numero mayor' : 'numero menor');

//-----Operador de desestructuracion 

var persona = {
    name: 'Isaac',
    sub: 'Saado'
}

var { name, sub } = persona; 
console.log(name);
console.log(sub);
console.log(persona);

//-----desestructuracion de arrays

var arreglo = [1,2,3,4,5];
var [pPosicion, dos] = arreglo;
console.log(pPosicion);
console.log(dos);

//------Operador de miembro o acceso de propiedad

//notacion punto
var persona = {
    name: 'Isaac',
    sub: 'Saado'    
}

console.log(persona.sub); //obtener acceso a una propiedad

//notacion por corchetes
var persona = {
    name: 'Isaac',
    sub: 'Saado'    
}

console.log(persona['name']); //otra manera de obtener

//notacion por corchetes en arreglos 
var arreglo = [21,22,23,24];
console.log(arreglo[2]);

//----------Operacion de determinacion de tipo ( tyeof)

console.log(typeof 'Isaac');
console.log(typeof 32);


