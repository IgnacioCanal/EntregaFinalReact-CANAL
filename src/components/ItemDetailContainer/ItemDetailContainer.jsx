import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import Notification from "../notification/Notification.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);
  const [hideItemCount, setHideItemCount] = useState(false);
  const { addToCart, setStockDisponible } = useContext(CartContext);
  const { idProducto } = useParams();
  const navigate = useNavigate();

  const addProduct = (cantidad) => {
    if (cantidad <= product.stock) {
      const productCart = { ...product, cantidad: cantidad };

      addToCart(productCart, cantidad);

      setStockDisponible((prevStock) => {
        const nuevoStock = prevStock[product.id]
          ? prevStock[product.id] - cantidad
          : product.stock - cantidad;
          if (nuevoStock < 0) {
            return prevStock;
          }
        return { ...prevStock, [product.id]: nuevoStock };
      });

      setHideItemCount(true);
      setProduct((prevProduct) => ({
        ...prevProduct,
        stock: prevProduct.stock,
      }));
      setNotification({ message: 'Producto añadido al carrito', type: 'success' });

      setTimeout(() => setNotification(null), 3000);
    } else {
      setNotification({ message: 'Stock insuficiente', type: 'error' });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleShowItemCount = () => {
    setHideItemCount(false);
  };

  const getProduct = async () => {
    try {
      const docRef = doc(db, "productos", idProducto);
      const dataDb = await getDoc(docRef);

      if (dataDb.exists()) {
        const productDb = { id: dataDb.id, ...dataDb.data() };
        setProduct(productDb);
      } else {
        setProduct(null);
      }
    } catch (error) {
      console.error("Error fetching product: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idProducto) {
      getProduct();
    }
  }, [idProducto]);
  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return <div>
    <p className="productnull">Producto no encontrado</p>
    <button onClick={handleBackToHome} className="botonnull">Volver al inicio</button>
  </div>;
  }
  return (
    <div>
      {notification && <Notification message={notification.message} type={notification.type} show={true} />}
      <ItemDetail
        product={product}
        addProduct={addProduct}
        hideItemCount={hideItemCount}
        handleShowItemCount={handleShowItemCount}
      />
    </div>
  );
};

export default ItemDetailContainer;
