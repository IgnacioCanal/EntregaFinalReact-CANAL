import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const Item = ({ product }) => {
  const { formatCurrency } = useContext(CartContext);

  return (
    <div className="item">
      <h3>{product.nombre}</h3>
      <img src={product.imagen} className="img-item" alt="items" />
      <p className="text-item">Precio: {formatCurrency(product.precio)}</p>
      <Link to={"/detalle/" + product.id} className="button-detail">
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;
