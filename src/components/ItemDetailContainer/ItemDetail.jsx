import "./itemdetail.css";
import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
const ItemDetail = ({
  product,
  addProduct,
  hideItemCount,
  handleShowItemCount,
}) => {
  const [stockDisponible, setStockDisponible] = useState(product.stock);
  const navigate = useNavigate();

  useEffect(() => {
    const calculateAvailableStock = () => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const productInCart = savedCart.find((item) => item.id === product.id);

      if (productInCart) {
        setStockDisponible(product.stock - productInCart.cantidad);
      } else {
        setStockDisponible(product.stock);
      }
    };

    if (product.stock) {
      calculateAvailableStock();
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
          <div>
            <button onClick={() => navigate("/cart")}>
              Terminar mi compra
            </button>
            <button onClick={handleShowItemCount}>Seguir comprando</button>
          </div>
        ) : (
          <ItemCount
            stockDisponible={stockDisponible}
            initial={1}
            addProduct={addProduct}
          />
        )}
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
  );
};

export default ItemDetail;
