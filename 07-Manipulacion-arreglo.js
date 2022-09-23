// Manipulacion de arreglos

//for each

var arreglo = ['a','b','c','d','e'];

console.log(arreglo.length); //imprimir la cantidad de atributos

for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    console.log(element);
}

arreglo.forEach((elemento) => console.log(elemento));

// push -- shift -- pop ===== elementos mutables

var letras = ['a','b','c','d','e'];

letras.push('f');
console.log(letras); //agregado de atributo a un array

// letras.shift();
var primera = letras.shift();
console.log(letras); //le quita el primer atributo al array
console.log(primera);

letras.pop(); 
console.log(letras); //saca el ultimo atributo

// === map ==== elemento inmutables

var estudiantes = ['Mariam', 'Mariaela', 'Pedro', 'Juan'];
var asistencia = estudiantes.map((nombre)=>{
    return {
        nombre: nombre,
        asistencia: false
    }
})
var asistencia2 = estudiantes.map((nombre) => `${nombre}.`) //solo agregar
                                        //en un lugar ay definido

console.log(estudiantes);
console.log(asistencia);
console.log(asistencia2);

// consideracion

var productos = [
    {nombre: 'camisas', precio: 20},
    {nombre: 'pantalon', precio: 24},
    {nombre: 'zapatos', precio: 40}
]

var productoImpuestos = productos.map((producto)=>{
    return {
        ...producto, //agarra el map del objeto y agrega nuevo atributo
        impuesto: 0.12
    }
})
//obtener ciertas propiedades del objeto
var precios = productos.map((producto) => producto.precio)

console.log(productos);
console.log(productoImpuestos);
console.log(precios);


// == filter

var estudiantes = [
    {nombre: 'elva', edad: 20, matriculado: true},
    {nombre: 'maria', edad: 23, matriculado: false},
    {nombre: 'pedro', edad: 19, matriculado: true},
    {nombre: 'juan', edad: 23, matriculado: false},
    {nombre: 'nixon', edad: 22, matriculado: true},
]

// var listaMayor =estudiantes.filter((estudiante)=> estudiante.edad >=21);
var listaMayor =estudiantes.filter((estudiante)=> estudiante.edad >=21 && estudiante.matriculado);
console.log(estudiantes);
console.log(listaMayor);

// ==== reduce

 var calificaciones = [3,4,6,8,2,10];
var suma = calificaciones.reduce((acumulador,calif)=>acumulador + calif, 0);
console.log(suma);
console.log(suma / calificaciones.length);

//salida solicitada una lista por edades 
var edades = [18,20,23,22,25,18,18, 24,25,22];

var respuesta = edades.reduce((acum,edad)=>{
    if(!acum[edad]){
        acum[edad] = 1;
    }else {
        acum[edad]+=1;
    }
    return acum;
},{})

console.log(edades);
console.log(respuesta);

//nos pide sacar el total que se recibio en dinero de las ventas
var ventas = [
    {nombre: 'tornillo', precio: 12, totalVendido: 40},
    {nombre: 'martillo', precio: 50, totalVendido: 5},
    {nombre: 'teipe', precio: 10, totalVendido: 60}
]
var resultado = ventas.reduce((acum, producto)=>{
    let totalVentas = producto.precio * producto.totalVendido;
    acum[producto.nombre] = totalVentas;
    return acum;
}, {})

console.log(ventas);
console.log(resultado);


// ================
//cantidad de matriculados y no matriculados
var estudiantes = [
    {nombre: 'elva', edad: 20, matriculado: true},
    {nombre: 'maria', edad: 23, matriculado: false},
    {nombre: 'pedro', edad: 19, matriculado: true},
    {nombre: 'juan', edad: 23, matriculado: false},
    {nombre: 'nixon', edad: 22, matriculado: true},
];

var resultado = estudiantes
    .map((estudiante)=>estudiante.matriculado)
    .reduce((acum,item)=>{
        if(item){
            acum.matriculado+=1;
        }else{
            acum.noMatriculado+=1;
        }
        return acum;
    },{matriculado: 0, noMatriculado: 0});

console.log(estudiantes);
console.log(resultado);

// ====== some -- every

//verifica si al menos uno cumple la condicion SOME
var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.some((numero)=> numero % 2 === 0);
console.log(resultado);

//verifica si todos cumplen la condicion EVERY
var numeros = [2,,4,6,8,10];

var resultado = numeros.every((numero)=> numero %2 === 0);
console.log(resultado);

// ===== find - findIndex
// FIND retorna un unico elemento, el primnero que encuentre sin repetir
//a diferencia del filter que retorna todos con la condicional
var clientes =  [
    {id: 1,name: 'Isaac'},
    {id: 2,name: 'sofia'},
    {id: 3,name: 'variela'},
    {id: 4,name: 'pedro'},
    {id: 3,name: 'ajenad'}
]

var cliente = clientes.find((cliente)=> cliente.id===3);
console.log(clientes);
console.log(cliente);
var filter = clientes.filter((cliente)=> cliente.id===3);
console.log(filter);

//FINDINDEX este nos retorna el valor de la posicion

var clientes =  [
    {id: 1,name: 'Isaac'},
    {id: 2,name: 'sofia'},
    {id: 3,name: 'variela'},
    {id: 4,name: 'pedro'},
    {id: 5,name: 'ajenad'}
]

var posicion = clientes.findIndex((cliente)=>cliente.id === 2);
console.log(posicion);
console.log(clientes[posicion]);

// ===== includes

var mascotas =['gato','perro','conejo'];
var resultado = mascotas.includes('gato');
console.log(resultado);

//manera para determianr un caracter de la cadena string 
console.log('Isaac'.includes('a'));

//pequeño buscador

var buscador = (parametro)=>{
  
let clientes =  [
    {id: 1,name: 'Isaac'},
    {id: 2,name: 'sofia'},
    {id: 3,name: 'variela'},
    {id: 4,name: 'pedro'},
    {id: 5,name: 'ajenad'}
]
    return clientes.filter((cliente)=>cliente.name.includes(parametro));
}

console.log(buscador('s'));

// ==== join

var elementos = ['fuego','agua','aire'];
var resultado = elementos.join('--')
console.log(resultado);

var clientes =  [
    {id: 1,name: 'Isaac'},
    {id: 2,name: 'sofia'},
    {id: 3,name: 'variela'},
    {id: 4,name: 'pedro'},
    {id: 5,name: 'ajenad'}
]
// console.log(clientes.join());
//funcion para csv excel (simulacion)

var csvGenerator = (array, separador = ',') => {
    let headers = Object.keys(array[0]).join('||')

    let data = array.map((element)=> Object.values(element)
    .join(separador))
    console.log(headers);
    data.forEach(element => console.log(element))
}
csvGenerator(clientes);

// //ejemplo de los usos de Object
// console.log(Object.values({id: 5,name: 'ajenad'}));
// console.log(Object.keys({id: 5,name: 'ajenad'}));


// ======== concat --- sort --- splice --- slice

// concat
var array1 = [1,2,3,4,5]
var array2 = [6,7,8,9,0]

var array3 = array1.concat(array2);
var array4 = [...array1, ...array2]; //metodo express operation
console.log(array1);
console.log(array2);
console.log(array3);

// sort (ordenamiento)
var array1 = [1,2,3,4,5,6,7,8,9,0]
console.log(array1.sort());

var meses = ['dic', 'ene','feb', 'mar', 'abr']
console.log(meses.sort());

//ordenamiento de menor a mayor
var numeros = [1, 1000, 21, 340, 4]
console.log(numeros.sort((a,b) => a-b));

// splice 
var nombres = ['Isaac', 'alejandro', 'Mariam']
nombres.splice(1, 1, 'Alnerto') //primer elemento poscion donde borrara
                //segundo elemento para determina cuantos eliminara (resto de cadena)
            //el tercer elemento es para ingresar un reemplazo
console.log(nombres);

// slice
var nombres = ['Isaac', 'alejandro', 'Mariam']
var resp = nombres.slice(1,3) //no incluye la ultima poscion
console.log(resp);
console.log(nombres); //no muta al arreglo como splice

