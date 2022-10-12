//los objetos tienen distintas propiedades o atributos, se accede a ellos con el nombre +.

let persona = {
  nombre: "Isaac",
  apellido: "Saado",
  edad: 22,
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

/* ************************* */

//Metodos en objetos

let persona2 = {
  nombre: "Isaac",
  apellido: "Saado",
  edad: 22,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};
console.log(persona2.nombreCompleto());

for (nombrePropiedad in persona2) {
  console.log(nombrePropiedad + ": " + persona2[nombrePropiedad]);
  //console.log(persona2[nombrePropiedad]);
}

// otra forma de crear objetos
let person = new Object();
person.prnombre = "alberto";
person.direccion = "unare";
person.tlf = "123445";

person.imprimirTod = function () {
  console.log(this.prnombre);
  console.log(this.direccion);
  console.log(this.tlf);
};
person.imprimirTod();

/* *************************************** */

// agregar nuevas propiedades o eliminar

let perso = {
  nombre: "Isaac",
  apellido: "Saado",
  edad: 22,
};

perso.tlf = "123442"; //agregar asi de simple
console.log(perso);

delete perso.tlf; //usando la palabra delete se elimina tanto el parametro como el valor
console.log(perso);

/* FORMAS DE IMPRIMIR */
//concatenar
console.log(perso.nombre + " " + perso.apellido);
//for in
for (nPropiedad in perso) {
  console.log(perso[nPropiedad]);
}

let persoArray = Object.values(perso);
console.log(persoArray);

let persoString = JSON.stringify(perso);

/* **************************************************** */

/* METODOS */

/* GET  SET */

let personal = {
  nombre: "Isaac",
  apellido: "Saado",
  edad: 22,
  idioma: "es",
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};
console.log(personal.nombreCompleto);
console.log(personal.lang);

personal.lang = "en";
console.log(personal.lang);
console.log(personal.idioma);

/* MANEJO DE CONSTRUCTORES EN POO */

function Estudiante(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

let estudiantePadre = new Estudiante("Isaac", "Saado", "isaac@gmail.com");
console.log(estudiantePadre);
console.log(estudiantePadre.nombreCompleto());

let otroEstu = new Estudiante("MAria", "perez", "kasdas@ksd");

console.log(otroEstu);
console.log(otroEstu.nombreCompleto());

// forma de agregar atributo a una propia clase de objeto

// Estudiante.prototype.tel = '122344'

/* ****************************** */
//Uso de call para uso de metodos 
let carro1 = {
  nombre: 'camaro',
  color: 'verde',
  descrip: function(){
    return this.nombre + ' de color ' + this.color;
  }
};

let carro2 = {
    nombre: 'spark',
    color: 'azul'
}

console.log(carro1.descrip());

//forma de usar un metodo de otro objeto o clase

console.log(carro1.descrip.call(carro2));


