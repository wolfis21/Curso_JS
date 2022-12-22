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
