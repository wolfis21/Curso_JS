
class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    get marca(){
        return this._marca;
    }

    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }

    set marca(marca){
        return this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contRatones;
    }

    toString(){
        return `[idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contTeclados;
    }

    toString(){
        return `[idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let raton1 = new Raton ('USB', 'HP');
let teclado1 = new Teclado('PS/2', 'microsoft');

class Monitor{

   static contMonitores = 0;

   constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
   }

   get marca(){
    return this._marca;
   }

   get tamaño(){
    return this._tamaño;
   }

   set marca(marca){
    return this._marca;
   }

   set tamaño(tamaño){
    return this._tamaño = tamaño;
   }

   toString(){
    return `[idMonitor: ${this._idMonitor}, Marca: ${this._marca}, tamaño: ${this._tamaño}]`;
   }
   
}
let monitor1 = new Monitor('HP', 24);

class Computadora{
    static contComputer = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputer = ++Computadora.contComputer;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora: ${this._idComputer} - ${this._nombre} \nMonitor: [${this._monitor}] \nRaton: [${this._raton}] \nTeclado: [${this._teclado}]`;
    }
}

class Orden {
    static contOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    aggComputer(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadoraOrden = '';
        for (let computadora of this._computadoras){
            computadoraOrden += `${computadora}`;
        }
    }
}

let computadora1 = new Computadora('HP',monitor1, raton1, teclado1);
console.log(computadora1.toString());

//agregar clase orden 

