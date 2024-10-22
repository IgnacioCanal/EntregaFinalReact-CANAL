import { useState, useEffect } from "react";
import { getProduct } from "../ItemListContainer/Productos.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import { useContext } from "react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();
  const {addToCart} = useContext(CartContext);
  const [hideItemCount, setHideItemCount] = useState(false)

  const addProduct = (count) => {
    const productCart = { ...product, cantidad: count}

    addToCart(productCart)
    setHideItemCount(true)
  }
 

  useEffect(() => {
    setLoading(true);
    getProduct(idProducto)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [idProducto]);
  if (loading) {
    return <Loading />;
  }

  return (<ItemDetail product={product} addProduct ={addProduct} hideItemCount ={hideItemCount}/>)
};

export default ItemDetailContainer;
