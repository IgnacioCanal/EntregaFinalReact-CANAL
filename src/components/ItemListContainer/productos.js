const products = [
  { id: 'A2B123', nombre: 'Taladro Percutor', precio: 3500, stock: 8, imagen: '', categoria: 'Herramientas' },
  { id: 'Z9C456', nombre: 'Sierra Circular', precio: 4200, stock: 5, imagen: '', categoria: 'Maquinarias' },
  { id: 'M3D789', nombre: 'Destornillador Phillips', precio: 300, stock: 20, imagen: '', categoria: 'Herramientas' },
  { id: 'B4E012', nombre: 'Llave Ajustable', precio: 250, stock: 15, imagen: '', categoria: 'Herramientas' },
  { id: 'X5F234', nombre: 'Amoladora Angular', precio: 2800, stock: 7, imagen: '', categoria: 'Maquinarias' },
  { id: 'C6G345', nombre: 'Martillo Demolición', precio: 400, stock: 10, imagen: '', categoria: 'Herramientas' },
  { id: 'V7H456', nombre: 'Taladro Inalámbrico', precio: 2200, stock: 12, imagen: '', categoria: 'Herramientas' },
  { id: 'N8I567', nombre: 'Atornillador', precio: 1800, stock: 9, imagen: '', categoria: 'Herramientas' },
  { id: 'Q9J678', nombre: 'Cinta Métrica', precio: 150, stock: 30, imagen: '', categoria: 'Herramientas' },
  { id: 'P0K789', nombre: 'Nivel Láser', precio: 500, stock: 10, imagen: '', categoria: 'Herramientas' },
  { id: 'L1M890', nombre: 'Interruptores', precio: 120, stock: 50, imagen: '', categoria: 'Electricidad' },
  { id: 'K2N901', nombre: 'Tomacorrientes', precio: 100, stock: 40, imagen: '', categoria: 'Electricidad' },
  { id: 'J3O012', nombre: 'Cable Eléctrico', precio: 50, stock: 100, imagen: '', categoria: 'Electricidad' },
  { id: 'H4P123', nombre: 'Lámpara Fluorescente', precio: 180, stock: 30, imagen: '', categoria: 'Electricidad' },
  { id: 'G5Q234', nombre: 'Caja de Fusibles', precio: 250, stock: 25, imagen: '', categoria: 'Electricidad' },
  { id: 'F6R345', nombre: 'Clavos', precio: 80, stock: 80, imagen: '', categoria: 'Clavos y Tornillos' },
  { id: 'E7S456', nombre: 'Tornillos', precio: 120, stock: 100, imagen: '', categoria: 'Clavos y Tornillos' },
  { id: 'D8T567', nombre: 'Tuercas', precio: 90, stock: 90, imagen: '', categoria: 'Clavos y Tornillos' },
  { id: 'C9U678', nombre: 'Argollas', precio: 70, stock: 70, imagen: '', categoria: 'Clavos y Tornillos' },
  { id: 'B0V789', nombre: 'Pernos', precio: 100, stock: 60, imagen: '', categoria: 'Clavos y Tornillos' }
];


const getProducts= () => {
  return new Promise((resolve, reject) =>{
    setTimeout( ()=>{
      resolve(products)
    }, 2000)
  })
}

export { getProducts }