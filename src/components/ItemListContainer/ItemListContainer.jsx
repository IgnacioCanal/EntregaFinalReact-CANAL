import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProducts } from './Productos';
import "./itemlistcontainer.scss"

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((error) =>{
        console.error(error)
      })
      .finally(() => {
        console.log("Finalizo la Promesa")
      })
  }, [])

  return (
    <div className="itemlistcontainer">
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
