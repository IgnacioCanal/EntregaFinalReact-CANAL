import { createContext, useState } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, cantidad) => {
    const ProductInCart = cart.find((cart) => cart.id === product.id);
    if (ProductInCart) {
      // Si el producto ya está en el carrito, sumamos la cantidad
      setCart(
        cart.map(cart => 
          cart.id === product.id 
          ? { ...cart, cantidad: cart.cantidad + cantidad } 
          : cart
        )
      );
    } else {
      // Si es la primera vez que se agrega el producto
      setCart([...cart, { ...product, cantidad }]);
    }
  }

  const deleteProductInCart = (idProducto) => {
    const productsFilter = cart.filter((productCart) => productCart.id !== idProducto)
    setCart(productsFilter)
  }

  const totalProducts = () => {
    const cantidadTotal = cart.reduce ((total, productCart) => total + productCart.cantidad, 0)
    return cantidadTotal
  }
  const totalPrecio = () => {
    const precioTotal = cart.reduce ((total, productCart) => total + (productCart.precio * productCart.cantidad), 0)
    return precioTotal
  }
  const deleteCart = () => {
    setCart ([])
  }

  const increaseQuantity = (id) => {
    setCart((prevCart) => 
      prevCart.map((product) =>
        product.id === id && product.cantidad < product.stock
          ? { ...product, cantidad: product.cantidad + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => 
      prevCart.map((product) =>
        product.id === id && product.cantidad > 1
          ? { ...product, cantidad: product.cantidad - 1 }
          : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,increaseQuantity, decreaseQuantity, totalPrecio, totalProducts, deleteProductInCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };