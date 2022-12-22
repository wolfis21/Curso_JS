class Producto {
  static contProducto = 0;

  constructor(nombre, precio) {
    this._idProducto = ++Producto.contProducto;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idProducto() {
    return this._idProducto;
  }
  get nombre() {
    return this._nombre;
  }
  get precio() {
    return this._precio;
  }

  set nombre(nombre) {
    return (this._nombre = nombre);
  }
  set precio(precio) {
    return (this._precio = precio);
  }

  toString() {
    return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
  }
}

class Orden{
    static contOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contOrdenes;
        this._productos = [];
       // this._contProductosAgg = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    aggProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contProductosAgg++] = producto;

        }else{
            console.log('No se pueden agregar mas productos');
        }
    }

    calcularTotal(){
        let totalVentas = 0;

        for(let producto of this._productos){ //recorre cada elemento de producto agregado para asignar precios
            totalVentas += producto.precio;
        }

        return totalVentas;
    }

    mostrarOrden(){
        let productoOrden = '';

        for(let producto of this._productos){
            productoOrden += '\n {' +producto.toString() + '}';
        }

        console.log(`Orden: ${this.idOrden} Total: $${this.calcularTotal()}, Productos: ${productoOrden}`);
    }

}

let producto1 = new Producto("martillo", 200);
let producto2 = new Producto("destornillador", 30);

let orden1 = new Orden();

orden1.aggProducto(producto1);
orden1.aggProducto(producto2);

orden1.mostrarOrden();


