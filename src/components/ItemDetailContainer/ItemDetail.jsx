import "./itemdetail.css";
import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const ItemDetail = ({ product, addProduct, hideItemCount }) => {
  const [stockDisponible, setStockDisponible] = useState(product.stock);
  const navigate = useNavigate();

  useEffect(() => {
    if (product && product.stock) {
      setStockDisponible(product.stock);
    }
  }, [product]);

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images"></div>
        <div className="main-image">
          <img src={product.imagen} alt="" />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.nombre}</h2>
        <p className="text-detail">{product.descripcion}</p>
        <p className="text-item">Stock disponible: {stockDisponible}</p>
        <p className="text-detail">Precio: ${product.precio}</p>
        {hideItemCount ? (
          <Link to={"/cart"}>Terminar mi compra</Link>
        ) : (
          <ItemCount
            stockDisponible={stockDisponible}
            initial={1}
            handleAgregar={addProduct}
          />
        )}
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
  );
};

export default ItemDetail;
