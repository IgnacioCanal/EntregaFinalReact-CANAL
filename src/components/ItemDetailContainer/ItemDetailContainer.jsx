import { useState, useEffect } from "react";
import { getProduct } from "../ItemListContainer/Productos.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();
  
 

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

  return (<ItemDetail product={product} />)
};

export default ItemDetailContainer;
