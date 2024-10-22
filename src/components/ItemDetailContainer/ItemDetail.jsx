import "./itemdetail.css"
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const ItemDetail = ({ product }) => {
  const [stockDisponible, setStockDisponible] = useState(product.stock);
  const { addToCart } = useContext(CartContext);
  const [hideItemCount, setHideItemCount] = useState(false)
  const navigate = useNavigate();
  
  useEffect(()=>{
    if (product && product.stock){
      setStockDisponible(product.stock);
    }
  },[product])

  const handleAgregar = (cantidad) => {
    if (cantidad <= stockDisponible) {
      addToCart(product, cantidad);
      setStockDisponible(stockDisponible - cantidad);
      setHideItemCount(true);
    }
  };
  
  if (!product || Object.keys(product).length === 0) {
    return <Loading />;
  }

  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="secondary-images">
        </div>
        <div className="main-image">
          <img src={product.imagen} alt="" />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.nombre}</h2>
        <p className="text-detail">{product.descripcion}</p>
        <p className="text-item">Stock disponible: {stockDisponible}</p>
        <p className="text-detail">Precio: ${product.precio}</p>
        {
          hideItemCount === true ? (
            <Link to={"/cart"}>Terminar mi compra</Link>
          ) : (
        <ItemCount stockDisponible={stockDisponible} initial={1} handleAgregar={handleAgregar} />
          )
        }
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
  )
}

export default ItemDetail
