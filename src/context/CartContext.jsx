import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product, quantity) => {
    const itemInCart = items.find(item => item.id === product.id);
    if (itemInCart) {
      // Si el producto ya está en el carrito, sumamos la cantidad
      setItems(
        items.map(item => 
          item.id === product.id 
          ? { ...item, quantity: item.quantity + quantity } 
          : item
        )
      );
    } else {
      // Si es la primera vez que se agrega el producto
      setItems([...items, { ...product, quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };