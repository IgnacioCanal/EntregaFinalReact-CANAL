import { useState } from "react";
import "./itemcount.css";
import { Link } from "react-router-dom";
const ItemCount = ({ stockDisponible, initial, addProduct }) => {
  const [cantidad, setCantidad] = useState(initial || 1);

  const incrementarCantidad = () =>
    cantidad < stockDisponible && setCantidad(cantidad + 1);
  const disminuirCantidad = () => cantidad > 1 && setCantidad(cantidad - 1);
  const agregarAlCarrito = () => {
    if (cantidad > 0 && cantidad <= stockDisponible) {
      addProduct(cantidad);
    }
  };

  return (
    <div className="producto-card">
      <div className="botonera">
        <button onClick={disminuirCantidad} disabled={stockDisponible === 0}>
          -
        </button>
        <span>{cantidad}</span>
        <button
          onClick={incrementarCantidad}
          disabled={cantidad >= stockDisponible}
        >
          +
        </button>
        <button onClick={agregarAlCarrito} disabled={stockDisponible === 0}>
          Agregar al carrito
        </button>
        <Link to="/cart">
          <button style={{ marginBottom: "10px" }}>Ir al Carrito</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
