import { useState, useEffect } from "react";
import './itemcount.scss'

const ItemCount = ({producto}) => {
  const [cantidad, setCantidad] = useState(1);
  const [carrito, setCarrito] = useState([]);
  const [stockVisible, setStockVisible] = useState(producto.stock);

  useEffect(() => {
    setStockVisible(producto.stock); // Reiniciar stock visible si el producto cambia
  }, [producto]);

  // Funciones para manejar la cantidad
  const incrementarCantidad = () => cantidad < stockVisible && setCantidad(cantidad + 1);
  const disminuirCantidad = () => cantidad > 1 && setCantidad(cantidad - 1);

  // Función para agregar al carrito
  const agregarAlCarrito = () => {
    if (cantidad > 0 && stockVisible > 0) {
      setCarrito([...carrito, { ...producto, cantidad }]);
      setStockVisible(stockVisible - cantidad); // Restar de stock visible
    }
  };

  if (!producto) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="producto-card">
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock disponible: {stockVisible}</p>

      <div className="botonera">
        <button onClick={disminuirCantidad} disabled={cantidad === 1}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementarCantidad} disabled={cantidad >= stockVisible}>+</button>
        <button onClick={agregarAlCarrito} disabled={cantidad === 0 || stockVisible === 0}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;

