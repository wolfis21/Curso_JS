class Persona {
  static contPersona = 0;

  constructor(nombre, apellido, edad) {
    this._idPersona = ++Persona.contPersona;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;

    //        ++Persona.contaPerson;
  }
  //metodo get
  get idPersona() {
    return this._idPersona;
  }
  get nombre() {
    return this._nombre;
  }
  get apellido() {
    return this._apellido;
  }
  get edad() {
    return this._edad;
  }

  //metodo set
  set nombre(nombre) {
    this._nombre = nombre;
  }
  set nombre(apellido) {
    this._apellido = apellido;
  }
  set nombre(edad) {
    this._edad = edad;
  }

  //to string

  toString() {
    return (
      this.idPersona +
      " - " +
      this._nombre +
      " " +
      this._apellido +
      ", " +
      this._edad
    );
  }
}

class Empleado extends Persona {
  static contEmpleado = 0;

  constructor(sueldo) {
    //super(idPersona, nombre, apellido, edad);
    this._idEmpleado = ++Empleado.contEmpleado;
    this._sueldo = sueldo;
  }

  //metodo get
  get idEmpleado() {
    return this._idEmpleado;
  }
  get sueldo() {
    return this._sueldo;
  }

  // metodo set
  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return super.toString() + " " + this._idEmpleado + " -$$- " + this._sueldo;
  }
}

class Cliente extends Persona {
  static contCliente = 0;

  constructor(fechaRegistro) {
    this._idCliente = ++Cliente.contCliente;
    this._fechaRegistro = fechaRegistro;
  }

  //metodo get

  get fechaRegistro() {
    return this._fechaRegistro;
  }

  //metodo set

  set fechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }

  //toString

  toString() {
    return super.toString + " nacimiento en: " + this._fechaRegistro;
  }
}

//pruebas

let persona1 = new Persona("elvis", "lado", "22");

console.log(persona1.toString());
