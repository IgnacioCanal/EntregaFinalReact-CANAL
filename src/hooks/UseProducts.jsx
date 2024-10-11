import { useState, useEffect } from "react";
import { getProducts } from "../components/ItemListContainer/Productos.js";
import { useParams } from "react-router-dom";
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
    .then((data) => {
  
      if (idCategoria) {
        const filterProducts = data.filter(
          (product) => product.categoria === idCategoria
        );
        setProducts(filterProducts);
      } else {
        setProducts(data);
      }
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      setLoading(false);
    });
  }, [idCategoria]);

  return { products, loading };
};

export default useProducts;
