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
