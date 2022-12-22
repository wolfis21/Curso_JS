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
