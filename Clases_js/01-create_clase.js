// se implementa un constructor y en ese mismo momento se 
// crean los atributos de la clase


//No es posible crear objetos antes de declarar la clase
//no se aplica el concepto de hoisting como las funciones

//clase padre
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
}
// clase hija
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

// Instancia de clase
let persona1 = new Persona( 'Isaac', 'Saado');

// persona1.nombre = 'Alejandro mas' //set
// console.log(persona1.nombre); //get 

let empleado1 = new Empleado('Maria', 'perez','biblioteca');
console.log(empleado1);
