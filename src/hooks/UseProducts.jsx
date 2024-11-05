import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../db/db.js";
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const collectionRef = collection(db, "productos");
        let productsQuery;

        if (idCategoria) {
          productsQuery = query(
            collectionRef,
            where("categoria", "==", idCategoria)
          );
        } else {
          productsQuery = collectionRef;
        }

        const dataDb = await getDocs(productsQuery);
        const productsDb = dataDb.docs.map((productDb) => ({
          id: productDb.id,
          ...productDb.data(),
        }));

        setProducts(productsDb);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [idCategoria]);

  return { products, loading };
};

export default useProducts;
