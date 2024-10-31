import { createContext, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import db from "../db/db";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isUpdating, setIsUpdating] = useState(false);


  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToCart = async (product, cantidad) => {
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
      await updateFirebaseStock(product.id, product.stock - cantidad);
    }
  };

  const deleteProductInCart = async (idProducto) => {
    const productToDelete = cart.find(
      (productCart) => productCart.id === idProducto
    );
    if (productToDelete) {
      const newCart = cart.filter((productCart) => productCart.id !== idProducto);
      setCart(newCart);
      saveCartToLocalStorage(newCart);

      const productRef = doc(db, "productos", idProducto);
      try {
        await updateDoc(productRef, {
          stock: productToDelete.stock + productToDelete.cantidad,
        });
      } catch (error) {
        console.error("Error al devolver el stock en Firebase: ", error);
      }
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
  const deleteCart = async () => {
    try {
      const updatedCart = [...cart];
      setCart([]);
      saveCartToLocalStorage([]);

      await Promise.all(
        updatedCart.map(async (productCart) => {
          const productRef = doc(db, "productos", productCart.id);
          await updateDoc(productRef, {
            stock: productCart.stock + productCart.cantidad,
          });
        })
      );
    } catch (error) {
      console.error(
        "Error al devolver el stock de los productos en Firebase: ",
        error
      );
    }
  };

  const updateFirebaseStock = async (productId, newStock) => {
    const productRef = doc(db, "productos", productId);
    await updateDoc(productRef, { stock: newStock });
  
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId ? { ...product, stock: newStock } : product
      )
    );
  };

  const increaseQuantity = async (id) => {
  setIsUpdating(true);

  const updatedCart = cart.map((product) => {
    if (product.id === id && product.stock > 0) {
      const newCantidad = product.cantidad + 1;
      const newStock = product.stock - 1;
      return { ...product, cantidad: newCantidad, stock: newStock };
    }
    return product;
  });

  setCart(updatedCart);
  saveCartToLocalStorage(updatedCart);

  try {
    const product = updatedCart.find((prod) => prod.id === id);
    await updateFirebaseStock(id, product.stock);
  } catch (error) {
    console.error("Error updating stock:", error);
  } finally {
    setIsUpdating(false); 
  }
};

const decreaseQuantity = async (id) => {
  setIsUpdating(true);

  const updatedCart = cart.map((product) => {
    if (product.id === id && product.cantidad > 1) {
      const newCantidad = product.cantidad - 1;
      const newStock = product.stock + 1;
      return { ...product, cantidad: newCantidad, stock: newStock };
    }
    return product;
  });

  setCart(updatedCart);
  saveCartToLocalStorage(updatedCart);

  try {
    const product = updatedCart.find((prod) => prod.id === id);
    await updateFirebaseStock(id, product.stock);
  } catch (error) {
    console.error("Error updating stock:", error);
  } finally {
    setIsUpdating(false);
  }
}

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
