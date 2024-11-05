import useProducts from "../hooks/UseProducts";
import { useState } from "react";
import "./hocFilterProducts.css";
import Loading from "../components/Loading/Loading";
const hocFilterProducts = (Component) => {
  return ({ idCategoria }) => {
    const { products, loading } = useProducts(idCategoria);
    const [query, setQuery] = useState("");
    const [typeOrder, setTypeOrder] = useState("");

    const changeInput = (event) => {
      setQuery(event.target.value.toLowerCase());
    };

    const search = () => {
      let filterProducts = products.filter((product) =>
        product.nombre.toLowerCase().includes(query)
      );

      if (typeOrder === "minor") {
        filterProducts = filterProducts.sort((prevProduct, nextProduct) => {
          return prevProduct.precio - nextProduct.precio;
        });
      } else if (typeOrder === "mayor") {
        filterProducts = filterProducts.sort((prevProduct, nextProduct) => {
          return nextProduct.precio - prevProduct.precio;
        });
      }
      return filterProducts;
    };

    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    return (
      <div className="filter-products">
        <div className="filters">
          <input type="text" placeholder="buscar..." onChange={changeInput} />
          <button onClick={() => setTypeOrder("minor")}>Menor Precio</button>
          <button onClick={() => setTypeOrder("mayor")}>Mayor Precio</button>
        </div>
        <Component products={search()} />
      </div>
    );
  };
};

export default hocFilterProducts;
