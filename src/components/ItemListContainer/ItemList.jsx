import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="no-products">
        <h2>No existen Productos, sepa disculparnos.</h2>
        <Link to="/" className="link-vacio">
          Volver al Inicio
        </Link>
      </div>
    );
  }
  return (
    <div className="itemlist">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
