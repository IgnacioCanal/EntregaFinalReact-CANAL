import { useState } from "react";
import './itemcount.css'

const ItemCount = ({stockDisponible, initial, onAgregar}) => {
  const [cantidad, setCantidad] = useState(initial || 1);

  // Funciones para manejar la cantidad
  const incrementarCantidad = () => cantidad < stockDisponible && setCantidad(cantidad + 1);
  const disminuirCantidad = () => cantidad > 1 && setCantidad(cantidad - 1);
  const agregarAlCarrito = () =>{ if (cantidad > 0 && cantidad <= stockDisponible) {onAgregar(cantidad);}};

  return (
    <div className="producto-card">
      <div className="botonera">
        <button onClick={disminuirCantidad} disabled={stockDisponible === 0}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementarCantidad} disabled={cantidad >= stockDisponible}>+</button>
        <button onClick={agregarAlCarrito} disabled= {stockDisponible === 0}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;

