import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product, cantidad) => {
    const itemInCart = items.find((item) => item.id === product.id);
    if (itemInCart) {
      itemInCart.cantidad += cantidad;
      // Si el producto ya está en el carrito, sumamos la cantidad
      setItems(
        items.map(item => 
          item.id === product.id 
          ? { ...item, cantidad: item.cantidad + cantidad } 
          : item
        )
      );
    } else {
      // Si es la primera vez que se agrega el producto
      setItems([...items, { ...product, cantidad }]);
    }
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };