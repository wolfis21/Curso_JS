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