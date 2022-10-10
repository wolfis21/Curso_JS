// se implementa un constructor y en ese mismo momento se 
// crean los atributos de la clase

class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
//return valores
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
//para modificar valor de variable
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
};

// Instancia de clase
let persona1 = new Persona( 'Isaac', 'Saado');
persona1.nombre = 'Alejandro mas' //set
console.log(persona1.nombre); //get 

