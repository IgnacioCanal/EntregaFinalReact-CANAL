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
  const { addToCart, setStockDisponible } = useContext(CartContext);
  const { idProducto } = useParams();

  const addProduct = (cantidad) => {
    if (cantidad <= product.stock) {
      const productCart = { ...product, cantidad: cantidad };
  
      addToCart(productCart, cantidad);
      
      setStockDisponible((prevStock) => {
        const nuevoStock = prevStock[product.id] ? prevStock[product.id] - cantidad : product.stock - cantidad;
        return { ...prevStock, [product.id]: nuevoStock };
      });


      setHideItemCount(true);
      setProduct((prevProduct) => ({
        ...prevProduct,
        stock: prevProduct.stock
      }));
    }
  };

  const handleShowItemCount = () => {
    setHideItemCount(false);
  };

  const getProduct = async () => {
    try {
      const docRef = doc(db, "productos", idProducto);
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

  return (
    <ItemDetail
      product={product}
      addProduct={addProduct}
      hideItemCount={hideItemCount}
      handleShowItemCount={handleShowItemCount}
    />
  );
};

export default ItemDetailContainer;
