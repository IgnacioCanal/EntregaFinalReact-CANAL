import "./itemdetail.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
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
  const { formatCurrency } = useContext(CartContext);

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
        <div className="main-image">
          <img src={product.imagen} alt="producto" />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.nombre}</h2>
        <p className="text-detail">{product.descripcion}</p>
        <p className="text-item">Stock disponible: {stockDisponible}</p>
        <p className="text-detail">Precio: {formatCurrency(product.precio)}</p>
        {hideItemCount ? (
          <div className="botones-finales">
            <button onClick={() => navigate("/cart")} className="terminar">
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
