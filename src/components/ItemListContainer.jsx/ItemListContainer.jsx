
import ItemCount  from "../ItemCount/ItemCount";

const ItemListContainer = () => {
  // Simulación de una lista de productos
  const productos = [
    { id: 1, nombre: 'Producto X', descripcion: 'Descripción del producto X', precio: 1000, stock: 6 },
    { id: 2, nombre: 'Producto Y', descripcion: 'Descripción del producto Y', precio: 1500, stock: 4 },
    { id: 3, nombre: 'Producto Z', descripcion: 'Descripción del producto Z', precio: 2000, stock: 8 },
  ];

  return (
    <div className="item-list-container">
      <h1>Lista de Productos</h1>
      <div className="productos">
        {productos.map((producto) => (
          <div key={producto.id}>
            <ItemCount producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
