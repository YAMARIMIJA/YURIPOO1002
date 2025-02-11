"use strict";
//creamos nuestra clase principal producto, porque esta es como nuestra base.
class Producto {
    constructor(id, nombre, precio, cantidad) {
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
    }
    //definimos nuestros get y set para poder acceder a nuestros atributos
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(value) {
        this._precio = value;
    }
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(value) {
        this._cantidad = value;
    }
    //Definimos nuestro metodo que accede a nuestra clase producto. 
    mostrarInfo() {
        console.log(`id: ${this._id}, nombre: ${this._nombre}, precio: ${this._precio}, cantidad: ${this._cantidad}`); //llama a la info de los productos, para que cuando la mandemos a llamar los imprima con este modelo ya contruido.
    }
}
//Creamos nuestra clase base inventario
class Inventario {
    constructor() {
        this._productos = []; // creamos un array que almacenara los productos ddl inventario
    }
    //definimos agregar productos para que reciba el producto como parametro
    agregarProducto(producto) {
        this._productos.push(producto);
    }
    //definimos consultar productos para que reciba el id como parametro y nos regresa el objeto producto, si lo encuentra con el id.
    consultarProducto(id) {
        for (const producto of this._productos) {
            if (producto.id === id) { //comparamos el id del producto con el que buscamos
                return producto; //Si se encuentra el producto
            }
        }
        return undefined; //Si no se encuentra el producto
    }
    //modificar cantidad recibe un número id y una cantidad como parametros.
    modificarCantidad(id, cantidad) {
        const producto = this.consultarProducto(id);
        if (producto) {
            producto.cantidad += cantidad; // Usamos el set cantidad
        }
    }
    //recibe un numero id 
    eliminarProducto(id) {
        this._productos = this._productos.filter(p => p.id !== id); //filtramos el array para crear uno nuevo con el id.
    }
    //Llama a mostrar info de cada producto para mostrar la informacion
    mostrarInventario() {
        this._productos.forEach(producto => producto.mostrarInfo());
    }
}
const inventario = new Inventario(); // Instancia de la clase Inventario
//crear productos
const producto1 = new Producto(1, 'Lápiz', 5, 50);
const producto2 = new Producto(2, 'Cuaderno', 25, 30);
const producto3 = new Producto(3, 'Goma', 5, 35);
//agregar productos al inventario
inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);
inventario.agregarProducto(producto3);
//mostrar inventario
console.log("#### MOSTRAR TODOS LOS PRODUCTOS #####");
inventario.mostrarInventario();
//consultar producto
const productoEncontrado = inventario.consultarProducto(2);
if (productoEncontrado) {
    console.log("#### CONSULTAR PRODUCTO CON ID 2 #####");
    console.log(productoEncontrado);
}
//modificar cantidad, con el id y la cantidad que queremos quitarle en este caso.
inventario.modificarCantidad(1, -20);
// Mostrar inventario actualizado
console.log("#### MODIFICAR LA CANTIDAD DEL ID=1 A -20 #####");
console.log("#### MOSTRAR INVENTARIO CON LA MODIFICACION #####");
inventario.mostrarInventario();
