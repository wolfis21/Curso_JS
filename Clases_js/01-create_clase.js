// se implementa un constructor y en ese mismo momento se
// crean los atributos de la clase

//No es posible crear objetos antes de declarar la clase
//no se aplica el concepto de hoisting como las funciones

//clase padre
class Persona {
  static contaPerson = 0; //atributos static, manejo similar como los metodos static

  email = "email default";

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    Persona.contaPerson++;
    console.log("Cantidad de personas es: " + Persona.contaPerson);
  }
  //return valores
  get nombre() {
    return this._nombre;
  }
  get apellido() {
    return this._apellido;
  }
  //para modificar valor de variable
  set nombre(nombre) {
    this._nombre = nombre;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
  //Sobreescribiendo de la clase padre (Object)
  toString() {
    //se aplica poliformismo (multiples formas en tiempo de ejecucion)
    //el metodo se ejecuta depende si es una referencia de tipo padre
    //o de tipo hijo
    return this.nombreCompleto();
  }
  //metodo static
  static saludar() {
    console.log("Saludos desde el metodo static");
  }
}
// clase hija
class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //llamar al constructor de la clase padre
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  //Sobreescritura
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
}

// Instancia de clase
let persona1 = new Persona("Isaac", "Saado");
console.log(persona1.nombreCompleto());
// persona1.nombre = 'Alejandro mas' //set
// console.log(persona1.nombre); //get

let empleado1 = new Empleado("Maria", "perez", "biblioteca");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
// metodo para poder ver en el navegador lo que tiene
// definido el objeto por consola
//solo si la clase lo tiene definido
console.log(empleado1.toString());

//--------------------------------------------- 21 / 12 / 22 ----------------------//

//persona1.saludar(); No se puede llamar a un metodo static desde un objeto
Persona.saludar();

console.log(persona1.email); //se llama este atributo solo desde el objeto creado
console.log(empleado1.email);
