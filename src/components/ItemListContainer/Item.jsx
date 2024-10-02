import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
const Item = ({ product }) => {
  const [stockDisponible, setStockDisponible] = useState(product.stock);
  const { addToCart } = useContext(CartContext);

  const handleAgregar = (cantidad) => {
    if (cantidad <= stockDisponible) {
      addToCart(product, cantidad);
      setStockDisponible(stockDisponible - cantidad);  // Actualizar el stock disponible
    }
  };

  return (
    <div className="item">
      <h3>{product.nombre}</h3>
      <img src="" alt="" />
      <p>Precio: ${product.precio}</p>
      <p>Stock disponible: {stockDisponible}</p>
      <ItemCount stockDisponible={stockDisponible} initial={1} onAgregar={handleAgregar} />
    </div>
  );
};

export default Item;
