import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [hideItemCount, setHideItemCount] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { idProducto } = useParams();
  
  const addProduct = (cantidad) => {

    if (cantidad <= product.stock) {
      const productCart = { ...product, cantidad: cantidad };
      addToCart(productCart, cantidad);
      
      setProduct(prevProduct => ({
        ...prevProduct,
        stock: prevProduct.stock - cantidad
      }));

      setHideItemCount(true);
    } 
  };

  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", idProducto);
      const dataDb = await getDoc(docRef);
      const productDb = { id: dataDb.id, ...dataDb.data() };
      setProduct(productDb);
    } catch (error) {
      console.error("Error fetching product: ", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getProduct();
  }, [idProducto]);
  if (loading) {
    return <Loading />;
  }

  return (<ItemDetail product={product} addProduct={addProduct} hideItemCount={hideItemCount} />)
};

export default ItemDetailContainer;
