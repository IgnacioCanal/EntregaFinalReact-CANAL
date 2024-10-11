import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const Item = ({ product }) => {
  const [stockDisponible, setStockDisponible] = useState(product.stock);
  const { addToCart } = useContext(CartContext);

  const handleAgregar = (cantidad) => {
    if (cantidad <= stockDisponible) {
      addToCart(product, cantidad);
      setStockDisponible(stockDisponible - cantidad);
    }
  };

  return (
    <div className="item">
      <h3>{product.nombre}</h3>
      <img src={product.imagen} className="img-item" alt="items" />
      <p className="text-item">Precio: ${product.precio}</p>
      <p className="text-item">Stock disponible: {stockDisponible}</p>
      <ItemCount stockDisponible={stockDisponible} initial={1} onAgregar={handleAgregar} />
      <Link to={ "/detalle/" + product.id } className="button-detail" >Ver Detalles</Link>
    </div>
  );
};

export default Item;
