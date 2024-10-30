import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js"



const productos = [
  { id: 'A2B123', nombre: 'Taladro Percutor', precio: 77000, stock: 4, imagen: '/img/Taladro Percutor.jpg', categoria: 'maquinas', descripcion:"Taladro Percutor marca Bosch" },
  { id: 'Z9C456', nombre: 'Sierra Circular', precio: 128000, stock: 4, imagen: '/img/Sierra Circular.jpg', categoria: 'maquinas', descripcion:"Sierra Circular Bosch" },
  { id: 'M3D789', nombre: 'Destornillador Phillips', precio: 8000, stock: 15, imagen: '/img/Destornillador Phillips.jpg', categoria: 'herramientas', descripcion:"Destornillador Phillips Bosch" },
  { id: 'B4E012', nombre: 'Llave Ajustable', precio: 15000, stock: 10, imagen: '/img/Llave Ajustable.jpg', categoria: 'herramientas', descripcion:"Llave ajustable" },
  { id: 'X5F234', nombre: 'Amoladora Angular', precio: 88000, stock: 5, imagen: '/img/Amoladora Angular.jpg', categoria: 'maquinas', descripcion:"Amoladora Angular" },
  { id: 'C6G345', nombre: 'Martillo Demolición', precio: 1200000, stock: 1, imagen: '/img/Martillo Demolicion.jpg', categoria: 'maquinas', descripcion:"Martillo de Demolicion " },
  { id: 'V7H456', nombre: 'Taladro Inalámbrico', precio: 350000, stock: 3, imagen: '/img/Taladro Inalambrico.jpg', categoria: 'maquinas', descripcion:"Taladro Inalambrico a batería" },
  { id: 'N8I567', nombre: 'Atornillador', precio: 110000, stock: 6, imagen: '/img/Atornillador.jpg', categoria: 'maquinas', descripcion:"Atornillador Inalambrico a batería" },
  { id: 'Q9J678', nombre: 'Cinta Métrica', precio: 9000, stock: 20, imagen: '/img/Cinta Metrica.jpg', categoria: 'herramientas', descripcion:"Cinta Métrica" },
  { id: 'P0K789', nombre: 'Nivel Láser', precio: 230000, stock: 5, imagen: '/img/Nivel Laser.jpg', categoria: 'maquinas', descripcion:"Nivel Laser" },
  { id: 'L1M890', nombre: 'Interruptores', precio: 1200, stock: 50, imagen: '/img/Interruptor.jpg', categoria: 'iluminacion', descripcion:"Interruptor" },
  { id: 'K2N901', nombre: 'Tomacorrientes', precio: 1000, stock: 40, imagen: '/img/Tomacorriente.jpg', categoria: 'iluminacion', descripcion:"Tomacorrientes varios" },
  { id: 'J3O012', nombre: 'Cable Eléctrico', precio: 160000, stock: 6, imagen: '/img/Cable Electrico.jpg', categoria: 'iluminacion', descripcion:"Cable Eléctrico rollo" },
  { id: 'H4P123', nombre: 'Lámpara Fluorescente', precio: 7500, stock: 10, imagen: '/img/Lampara Fluorescente.jpg', categoria: 'iluminacion', descripcion:"Lampara Fluorescente" },
  { id: 'G5Q234', nombre: 'Caja de Fusibles', precio: 25000, stock: 10, imagen: '/img/Caja de Fusibles.jpg', categoria: 'iluminacion', descripcion:"Caja de Fusibles para exteriores o interiores" },
  { id: 'F6R345', nombre: 'Clavos', precio: 50, stock: 1000, imagen: '/img/Clavos.jpg', categoria: 'clavosytornillos', descripcion:"Clavos de todas las medidas" },
  { id: 'E7S456', nombre: 'Tornillos', precio: 60, stock: 1000, imagen: '/img/Tornillos.jpg', categoria: 'clavosytornillos', descripcion:"Tornillos varios" },
  { id: 'D8T567', nombre: 'Tuercas', precio: 50, stock: 900, imagen: '/img/Tuercas.jpg', categoria: 'clavosytornillos', descripcion:"Tuercas de diversas medidas" },
  { id: 'C9U678', nombre: 'Argollas', precio: 40, stock: 500, imagen: '/img/Argollas.jpg', categoria: 'clavosytornillos', descripcion:"Arandelas de muchos tamaños" },
  { id: 'B0V789', nombre: 'Pernos', precio: 150, stock: 200, imagen: '/img/Pernos.jpg', categoria: 'clavosytornillos', descripcion:"Pernos varios" }
];


const seedProductos = () => {
  const productosRef = collection(db, "productos")
  productos.map(({id, ...dataProducto}) =>{
    addDoc(productosRef, dataProducto)
  })

  console.log("productos subidos")
  return
}

seedProductos()