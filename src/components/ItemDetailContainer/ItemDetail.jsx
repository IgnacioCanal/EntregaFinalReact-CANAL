import "./itemdetail.css"
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Loading from "../Loading/Loading";
const ItemDetail = ({ product }) => {
  const [stockDisponible, setStockDisponible] = useState(product.stock);
  const { addToCart } = useContext(CartContext);

  useEffect(()=>{
    if (product && product.stock){
      setStockDisponible(product.stock);
    }
  },[product])

  const handleAgregar = (cantidad) => {
    if (cantidad <= stockDisponible) {
      addToCart(product, cantidad);
      setStockDisponible(stockDisponible - cantidad);
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
        <ItemCount stockDisponible={stockDisponible} initial={1} onAgregar={handleAgregar} />
      </div>
    </div>
  )
}

export default ItemDetail
