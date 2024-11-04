import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [stockDisponible, setStockDisponible] = useState({});

  useEffect(() => {
    const initialStock = {};
    cart.forEach((item) => {
      initialStock[item.id] = item.stock - item.cantidad;
    });
    setStockDisponible(initialStock);
  }, [cart]);

  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToCart = (product, cantidad) => {
    const ProductInCart = cart.find((cart) => cart.id === product.id);
    let newCart;
    
    if (ProductInCart) {
      const newCantidad = ProductInCart.cantidad + cantidad;

      if (newCantidad <= product.stock) {
        newCart = cart.map((cart) =>
          cart.id === product.id ? { ...cart, cantidad: newCantidad } : cart
        );
      }
    } else {
      if (cantidad <= product.stock) {
        newCart = [...cart, { ...product, cantidad }];
      }
    }
    if (newCart) {
      setCart(newCart);
      saveCartToLocalStorage(newCart);
      const newStock = { ...stockDisponible };
      newStock[product.id] = product.stock - newCart.find(item => item.id === product.id).cantidad;
      setStockDisponible(newStock);
    }
  };

  const deleteProductInCart = (idProducto) => {
    const productToDelete = cart.find(
      (productCart) => productCart.id === idProducto
    );
    if (productToDelete) {
      const newCart = cart.filter((productCart) => productCart.id !== idProducto);
      setCart(newCart);
      saveCartToLocalStorage(newCart);
    }
  };

  const totalProducts = () => {
    const cantidadTotal = cart.reduce(
      (total, productCart) => total + productCart.cantidad,
      0
    );
    return cantidadTotal;
  };
  const totalPrecio = () => {
    const precioTotal = cart.reduce(
      (total, productCart) => total + productCart.precio * productCart.cantidad,
      0
    );
    return precioTotal;
  };
  const deleteCart = () => {
    try {
      setCart([]);
      saveCartToLocalStorage([]);

    } catch (error) {
      console.error(
        "Error al vaciar el carrito: ", error);
    }
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id && product.cantidad < product.stock) {
        return { ...product, cantidad: product.cantidad + 1 };
      }
      return product;
    });

  setCart(updatedCart);
  saveCartToLocalStorage(updatedCart);

};

const decreaseQuantity = (id) => {
  const updatedCart = cart.map((product) => {
    if (product.id === id && product.cantidad > 1) {
      return { ...product, cantidad: product.cantidad - 1 };
    }
    return product;
  });

  setCart(updatedCart);
  saveCartToLocalStorage(updatedCart);
};

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrecio,
        totalProducts,
        deleteProductInCart,
        deleteCart,
        setStockDisponible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
