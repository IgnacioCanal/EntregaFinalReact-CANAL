const products = [
  { id: 'A2B123', nombre: 'Taladro Percutor', precio: 3500, stock: 8, imagen: '/img/Taladro Percutor.jpg', categoria: 'maquinas', descripcion:"Taladro Percutor marca Bosch" },
  { id: 'Z9C456', nombre: 'Sierra Circular', precio: 4200, stock: 5, imagen: '/img/Sierra Circular.jpg', categoria: 'maquinas', descripcion:"Sierra Circular Bosch" },
  { id: 'M3D789', nombre: 'Destornillador Phillips', precio: 300, stock: 20, imagen: '/img/Destornillador Phillips.jpg', categoria: 'herramientas', descripcion:"Destornillador Phillips Bosch" },
  { id: 'B4E012', nombre: 'Llave Ajustable', precio: 250, stock: 15, imagen: '/img/Llave Ajustable.jpg', categoria: 'herramientas', descripcion:"Llave ajustable" },
  { id: 'X5F234', nombre: 'Amoladora Angular', precio: 2800, stock: 7, imagen: '/img/Amoladora Angular.jpg', categoria: 'maquinas', descripcion:"Amoladora Angular" },
  { id: 'C6G345', nombre: 'Martillo Demolición', precio: 400, stock: 10, imagen: '/img/Martillo Demolicion.jpg', categoria: 'maquinas', descripcion:"Martillo de Demolicion " },
  { id: 'V7H456', nombre: 'Taladro Inalámbrico', precio: 2200, stock: 12, imagen: '/img/Taladro Inalambrico.jpg', categoria: 'maquinas', descripcion:"Taladro Inalambrico a batería" },
  { id: 'N8I567', nombre: 'Atornillador', precio: 1800, stock: 9, imagen: '/img/Atornillador.jpg', categoria: 'maquinas', descripcion:"Atornillador Inalambrico a batería" },
  { id: 'Q9J678', nombre: 'Cinta Métrica', precio: 150, stock: 30, imagen: '/img/Cinta Metrica.jpg', categoria: 'herramientas', descripcion:"Cinta Métrica" },
  { id: 'P0K789', nombre: 'Nivel Láser', precio: 500, stock: 10, imagen: '/img/Nivel Laser.jpg', categoria: 'maquinas', descripcion:"Nivel Laser" },
  { id: 'L1M890', nombre: 'Interruptores', precio: 120, stock: 50, imagen: '/img/Interruptor.jpg', categoria: 'iluminacion', descripcion:"Interruptor" },
  { id: 'K2N901', nombre: 'Tomacorrientes', precio: 100, stock: 40, imagen: '/img/Tomacorriente.jpg', categoria: 'iluminacion', descripcion:"Tomacorrientes varios" },
  { id: 'J3O012', nombre: 'Cable Eléctrico', precio: 50, stock: 100, imagen: '/img/Cable Electrico.jpg', categoria: 'iluminacion', descripcion:"Cable Eléctrico rollo" },
  { id: 'H4P123', nombre: 'Lámpara Fluorescente', precio: 180, stock: 30, imagen: '/img/Lampara Fluorescente.jpg', categoria: 'iluminacion', descripcion:"Lampara Fluorescente" },
  { id: 'G5Q234', nombre: 'Caja de Fusibles', precio: 250, stock: 25, imagen: '/img/Caja de Fusibles.jpg', categoria: 'iluminacion', descripcion:"Caja de Fusibles para exteriores o interiores" },
  { id: 'F6R345', nombre: 'Clavos', precio: 80, stock: 80, imagen: '/img/Clavos.jpg', categoria: 'clavosytornillos', descripcion:"Clavos de todas las medidas" },
  { id: 'E7S456', nombre: 'Tornillos', precio: 120, stock: 100, imagen: '/img/Tornillos.jpg', categoria: 'clavosytornillos', descripcion:"Tornillos varios" },
  { id: 'D8T567', nombre: 'Tuercas', precio: 90, stock: 90, imagen: '/img/Tuercas.jpg', categoria: 'clavosytornillos', descripcion:"Tuercas de diversas medidas" },
  { id: 'C9U678', nombre: 'Argollas', precio: 70, stock: 70, imagen: '/img/Argollas.jpg', categoria: 'clavosytornillos', descripcion:"Arandelas de muchos tamaños" },
  { id: 'B0V789', nombre: 'Pernos', precio: 100, stock: 60, imagen: '/img/Pernos.jpg', categoria: 'clavosytornillos', descripcion:"Pernos varios" }
];


const getProducts= () => {
  return new Promise((resolve) =>{
    setTimeout( ()=>{
      resolve(products)
    }, 2000)
  })
}

const getProduct = (idProducto) =>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      const product = products.find((product)=> product.id === idProducto)
      resolve(product)
    }, 2000)
  })
}

export { getProducts, getProduct }