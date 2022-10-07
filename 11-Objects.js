//los objetos tienen distintas propiedades o atributos, se accede a ellos con el nombre +. 

let persona={
    nombre: 'Isaac',
    apellido: 'Saado',
    edad: 22
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

/* ************************* */

//Metodos en objetos

let persona2={
    nombre: 'Isaac',
    apellido: 'Saado',
    edad: 22,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona2.nombreCompleto());

for(nombrePropiedad in persona2){
    console.log(nombrePropiedad + ': ' + persona2[nombrePropiedad]);
    //console.log(persona2[nombrePropiedad]);
}

// otra forma de crear objetos
let person = new Object();
person.prnombre='alberto';
person.direccion='unare';
person.tlf='123445';

person.imprimirTod = function(){
    console.log(this.prnombre);
    console.log(this.direccion);
    console.log(this.tlf);
}
person.imprimirTod();

/* *************************************** */

// agregar nuevas propiedades o eliminar 

let perso={
    nombre: 'Isaac',
    apellido: 'Saado',
    edad: 22
}

perso.tlf='123442'; //agregar asi de simple
console.log(perso);

delete perso.tlf; //usando la palabra delete se elimina tanto el parametro como el valor
console.log(perso);

/* FORMAS DE IMPRIMIR */
//concatenar
console.log(perso.nombre + ' ' + perso.apellido);
//for in 
for(nPropiedad in perso){
    console.log(perso[nPropiedad]);
}

let persoArray = Object.values(perso);
console.log(persoArray);

let persoString = JSON.stringify(perso);

/* **************************************************** */

/* METODOS */

/* GET  SET */

let personal={
    nombre: 'Isaac',
    apellido: 'Saado',
    edad: 22,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(personal.nombreCompleto);
console.log(personal.lang);

personal.lang = 'en';
console.log(personal.lang);
console.log(personal.idioma);
