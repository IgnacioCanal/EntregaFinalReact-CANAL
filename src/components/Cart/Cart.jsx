import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const {
    cart,
    totalPrecio,
    deleteProductInCart,
    deleteCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="conteinervacio">
        <h2>No hay productos en el carrtito 🥲</h2>
        <Link className="linkvacio" to="/">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Productos en el carrito</h1>
      {cart.map((productCart) => (
        <div className="cartconteiner" key={productCart.id}>
          <img src={productCart.imagen} alt="producto" />
          <Link className="link" to={`/detalle/${productCart.id}`}>
            {productCart.nombre}
          </Link>
          <p>precio c/u: {productCart.precio}</p>
          <p>Stock Disponible: {productCart.stock - productCart.cantidad}</p>
          <div className="botonera">
            <button
              onClick={() => decreaseQuantity(productCart.id)}
              disabled={productCart.cantidad === 1}
            >
              -
            </button>
            <p>{productCart.cantidad}</p>
            <button
              onClick={() => increaseQuantity(productCart.id)}
              disabled={productCart.cantidad == productCart.stock}
            >
              +
            </button>
          </div>
          <p>precio parcial: {productCart.precio * productCart.cantidad} </p>
          <button onClick={() => deleteProductInCart(productCart.id)}>
            borrar producto
          </button>
        </div>
      ))}

      <div>
        <p>Precio total: {totalPrecio()}</p>
        <Link to="/checkout">Terminar con la Orden de Compra</Link>
        <button onClick={deleteCart}>Vaciar carrito</button>
      </div>
    </div>
  );
};
export default Cart;
