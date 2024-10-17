import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    totalPrecio,
    deleteProductInCart,
    deleteCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  return (
    <div>
      <h1>Productos en el carrito</h1>
      {cart.map((productCart) => (
        <div
          style={{ display: "flex", justifyContent: "space-around" }}
          key={productCart.id}
        >
          <img src={productCart.imagen} width={100} alt="" />
          <Link to={`/detalle/${productCart.id}`}>{productCart.nombre}</Link>
          <p>precio c/u: {productCart.precio}</p>
          <div>
            <button
              onClick={() => decreaseQuantity(productCart.id)}
              disabled={productCart.cantidad === 1}
            >
              -
            </button>
            <p>{productCart.cantidad}</p>
            <button
              onClick={() => increaseQuantity(productCart.id)}
              disabled={productCart.cantidad >= productCart.stock}
            >
              +
            </button>
          </div>
          <p>precio parcial: {productCart.precio * productCart.cantidad} </p>
          <button
            onClick={() => deleteProductInCart(productCart.id)}
          >
            borrar producto
          </button>
        </div>
      ))}

      <div>
        <p>Precio total: {totalPrecio()}</p>
        <button onClick={deleteCart}>Vaciar carrito</button>
      </div>
    </div>
  );
};
export default Cart;
